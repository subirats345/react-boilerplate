const SocialLoginButton = ({ color, icon, callback }) => {
  return (
    <button
      className={`btn flex-auto ${color}`}
      onClick={() => console.log("hello")}>
      {icon}
    </button>
  );
};

export default SocialLoginButton;
