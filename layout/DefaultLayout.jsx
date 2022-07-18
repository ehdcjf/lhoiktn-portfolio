import Navigation from "../components/Navigation/Navigation";
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default DefaultLayout;
