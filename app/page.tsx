"use client";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import withAuth from "@/utils/withAuth";

const Home: React.FC = () => {
  return (
    <div className="">
      <DashboardContainer />
    </div>
  );
};

export default withAuth(Home);
