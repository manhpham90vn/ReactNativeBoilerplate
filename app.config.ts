import { ExpoConfig, ConfigContext } from 'expo/config';

module.exports = ({ config }: ConfigContext): ExpoConfig => {
  return {
    name: 'react-native-boilerplate',
    slug: 'reactNativeBoilerplate',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/1024x1024.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/images/1284x2778.png',
      resizeMode: 'cover',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.manhpham90vn.reactNativeBoilerplate',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/1024x1024.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.manhpham90vn.reactNativeBoilerplate',
    },
    web: {
      favicon: './assets/images/1084x2778.png',
    },
    extra: {
      eas: {
        projectId: 'eb7182ab-ed41-4004-a732-0a7aa608bc79',
      },
    },
    owner: 'manhpham90vn',
  };
};