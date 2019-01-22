remotedev-debugger --injectserver || { exit 1; }

# Copy react-native-vector-icons' fonts to Android project
mkdir --parents android/app/src/main/assets/fonts || \
    { echo "Cannot create android fonts folder."; exit 2; }
cp --verbose node_modules/react-native-vector-icons/Fonts/FontAwesome5*.ttf android/app/src/main/assets/fonts || \
    { echo -e "\e[0;31mFailed to copy FontAwesome 5 to local android assets\e[m"; exit 2; }
