declare global {   
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpayScript = (): Promise<void> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      console.log("Razorpay script loaded")
      resolve();
    };
    document.body.appendChild(script);
  });
};

export const initializePayment = async ({
  amount,
  name,
  email,
  contact,
  onSuccess,
}: {
  amount: number;
  name?: string;
  email?: string;
  contact?: string;
  onSuccess: (response: any) => void;
}) => {
  await loadRazorpayScript();

  const options = {
    key: "rzp_live_rGbboVdZDemLJ0", // Replace with your Razorpay test key
    amount: amount * 100, // Razorpay expects amount in paisa
    currency: "INR",
    name: "Uniford Scholar ID",
    description: "Scholar ID Card Registration Fee",
    handler: (response: any) => {
      onSuccess(response);
    },
    prefill: {
      name,
      email,
      contact
    },
    theme: {
      color: "#9b87f5"
    }
  };

  console.log('Razorpay options:', options)

  const razorpayInstance = new window.Razorpay(options);
  razorpayInstance.open();
};
