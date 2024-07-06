export const changePasswordAPI = async (data) => {
  // Simulate an API call to change the password
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.currentPassword === "correct-password") {
        resolve({ success: true });
      } else {
        reject(new Error("Incorrect current password"));
      }
    }, 1000);
  });
};

export const updateProfileAPI = async (data) => {
  // Simulate an API call to update the profile
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

export const forgotPasswordAPI = async (email) => {
  // Simulate an API call to send a password reset link
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

export const fetchAccountDetailsAPI = async () => {
  // Simulate an API call to fetch account details
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        accountId: "123456",
        registrationDate: "2023-01-01",
      });
    }, 1000);
  });
};