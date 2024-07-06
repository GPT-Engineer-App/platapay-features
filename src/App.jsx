import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Info, DollarSign, Mail, Progress } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
import Features from "./pages/Features.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import ChangePassword from "./pages/AccountManagement/ChangePassword.jsx";
import ForgotPassword from "./pages/AccountManagement/ForgotPassword.jsx";
import ViewAccount from "./pages/AccountManagement/ViewAccount.jsx";
import EditProfile from "./pages/AccountManagement/EditProfile.jsx";
import CustomerManagement from "./pages/CustomerCare/CustomerManagement.jsx";
import OnlineTicketing from "./pages/CustomerCare/OnlineTicketing.jsx";
import PartnerTraining from "./pages/CustomerCare/PartnerTraining.jsx";
import FeatureProgress from "./pages/FeatureProgress.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    title: "Feature Progress",
    to: "/feature-progress",
    icon: <Progress className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="features" element={<Features />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="contact" element={<Contact />} />
              <Route path="account/change-password" element={<ChangePassword />} />
              <Route path="account/forgot-password" element={<ForgotPassword />} />
              <Route path="account/view-account" element={<ViewAccount />} />
              <Route path="account/edit-profile" element={<EditProfile />} />
              <Route path="customer-care/customer-management" element={<CustomerManagement />} />
              <Route path="customer-care/online-ticketing" element={<OnlineTicketing />} />
              <Route path="customer-care/partner-training" element={<PartnerTraining />} />
              <Route path="feature-progress" element={<FeatureProgress />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;