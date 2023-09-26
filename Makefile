.PHONY: build
build: ios android
ios:
	eas build --platform ios --profile stg
android:
	eas build --platform android --profile stg


.PHONY: local
local: local_ios local_android
local_ios:
	eas build --platform ios --local --profile dev
local_android:
	eas build --platform android --local --profile dev

.PHONY: doctor
doctor:
	npx expo-doctor
