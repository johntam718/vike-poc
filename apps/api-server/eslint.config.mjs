import createConfig from "@sport-play/eslint-config/create-config";
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'

export default createConfig({
  ignores: ["dist", "tsconfig.app.json"],
  react: true,
  // plugins: {
  //   "react-hooks": reactHooks,
  //   "react-refresh": reactRefresh,
  // },
  // rules: {
  //   ...reactHooks.configs.recommended.rules,
  // }
});
