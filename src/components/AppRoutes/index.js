import { Routes, Route } from "react-router-dom";
import Users from "../../modules/Users/index";
import GenerateCoupons from "../../modules/GenerateCoupons";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="coupon" element={<GenerateCoupons />} />
    </Routes>
  );
};

export default AppRoutes;