import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const PRIMARY = "#4CC44C";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#EBEBEB" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* ── Logo ── */}
          <View style={styles.logoWrapper}>
            <View style={styles.crossV} />
            <View style={styles.crossH} />
          </View>

          {/* ── Heading ── */}
          <Text style={styles.heading}>Sign In</Text>
          <Text style={styles.subheading}>
            Let's experience the joy of telecare AI.
          </Text>

          {/* ── Email ── */}
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputRow}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#BDBDBD"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="test@test.com"
              placeholderTextColor="#C8C8C8"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* ── Password ── */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputRow}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#BDBDBD"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password..."
              placeholderTextColor="#C8C8C8"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Pressable
              onPress={() => setShowPassword((v) => !v)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#BDBDBD"
              />
            </Pressable>
          </View>

          {/* ── Sign In Button ── */}
          <Pressable
            style={({ pressed }) => [
              styles.signInBtn,
              pressed && { opacity: 0.85 },
            ]}
          >
            <Text style={styles.signInBtnText}>Sign In</Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          </Pressable>

          {/* ── Social Login ── */}
          <View style={styles.socialRow}>
            <Pressable
              style={({ pressed }) => [
                styles.socialBtn,
                pressed && { opacity: 0.75 },
              ]}
            >
              <FontAwesome name="facebook-f" size={20} color="#4A4A4A" />
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.socialBtn,
                pressed && { opacity: 0.75 },
              ]}
            >
              <FontAwesome name="google" size={20} color="#4A4A4A" />
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.socialBtn,
                pressed && { opacity: 0.75 },
              ]}
            >
              <FontAwesome name="instagram" size={20} color="#4A4A4A" />
            </Pressable>
          </View>

          {/* ── Footer ── */}
          <Text style={styles.footerText}>
            Don't have an account? <Text style={styles.link}>Sign Up.</Text>
          </Text>
          <Pressable style={{ marginTop: 6 }}>
            <Text style={styles.link}>Forgot your password?</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },

  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 28,
    paddingTop: 56,
    paddingBottom: 48,
  },

  /* ── Logo cross/plus ── */
  logoWrapper: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  crossV: {
    position: "absolute",
    width: 16,
    height: 60,
    backgroundColor: PRIMARY,
    borderRadius: 8,
  },
  crossH: {
    position: "absolute",
    width: 60,
    height: 16,
    backgroundColor: PRIMARY,
    borderRadius: 8,
  },

  /* ── Typography ── */
  heading: {
    fontSize: 34,
    fontWeight: "800",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    color: "#9E9E9E",
    textAlign: "center",
    marginBottom: 36,
    lineHeight: 20,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 13,
    fontWeight: "600",
    color: "#4A4A4A",
    marginBottom: 8,
  },

  /* ── Input field ── */
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === "ios" ? 14 : 12,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    padding: 0, // removes extra Android padding
  },

  /* ── Sign In Button ── */
  signInBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY,
    borderRadius: 14,
    paddingVertical: 16,
    width: "100%",
    marginTop: 4,
    marginBottom: 32,
    shadowColor: PRIMARY,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  signInBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  /* ── Social buttons ── */
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    gap: 16,
  },
  socialBtn: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  /* ── Footer text ── */
  footerText: {
    fontSize: 13,
    color: "#888",
    textAlign: "center",
  },
  link: {
    color: PRIMARY,
    fontWeight: "600",
  },
});
