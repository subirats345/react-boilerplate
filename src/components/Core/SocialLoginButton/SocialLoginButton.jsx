const SocialLoginButton = ({ color, icon, callback }) => {
  return (
    <button className={`btn flex-auto ${color}`} onClick={callback}>
      {icon}
    </button>
  );
};

export default SocialLoginButton;
