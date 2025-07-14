"use client"
import React, { useState } from 'react';
import { Card, Button, Form, Input, Alert, Row, Col } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { LockOutlined, CreditCardOutlined } from '@ant-design/icons';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('your_stripe_publishable_key_here'); // Replace with your Stripe publishable key

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // Create payment intent on your server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 1000, // Replace with dynamic amount in cents
          currency: 'usd',
        }),
      });

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: values.name,
            email: values.email,
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        // Handle successful payment
        form.resetFields();
        // You might want to redirect or show success message
        setError('Payment successful!');
      }
    } catch (err) {
      setError('An error occurred while processing your payment.');
    } finally {
      setProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical" className="max-w-md mx-auto">
      {error && (
        <Alert
          message={error}
          type={error.includes('successful') ? 'success' : 'error'}
          showIcon
          className="mb-6"
        />
      )}
      <Form.Item
        label="Cardholder Name"
        name="name"
        rules={[{ required: true, message: 'Please enter the cardholder name' }]}
      >
        <Input prefix={<CreditCardOutlined />} placeholder="John Doe" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
      >
        <Input prefix={<LockOutlined />} placeholder="john@example.com" />
      </Form.Item>
      <Form.Item label="Card Details">
        <div className="border rounded-md p-3">
          <CardElement options={cardElementOptions} />
        </div>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={processing}
          disabled={!stripe}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Pay Now
        </Button>
      </Form.Item>
    </Form>
  );
};

const PaymentScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify29 justify-center py-12">
      <Row justify="center" className="w-full max-w-2xl">
        <Col span={24}>
          <Card
            title="Secure Payment"
            className="shadow-lg"
            headStyle={{ backgroundColor: '#1890ff', color: 'white' }}
          >
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentScreen;