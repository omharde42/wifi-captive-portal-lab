# 📡 Wi-Fi Captive Portal Lab

A safe, private Wi-Fi captive portal laboratory for testing custom network welcome pages using **Android, Termux, HTML, CSS, and JavaScript**.

The project simulates a Free Wi-Fi experience where a user connects to a test network, views Terms & Conditions, accepts them, and can manually play an audio file.

> ⚠️ **Authorized Testing Only:** Use this project only on networks and devices you own or have explicit permission to test.

---

## ✨ Features

- 📶 Custom Wi-Fi portal interface
- 🌐 Local web hosting through Termux
- 📱 Mobile-responsive design
- 💻 Desktop browser support
- 📜 Terms & Conditions screen
- 🔊 User-controlled audio playback
- 🧪 Designed for private network experiments
- 🪶 Minimal dependencies

---

## 📁 Project Structure

```text
wifi-captive-portal-lab/
├── README.md
├── LICENSE
├── .gitignore
│
├── portal/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── audio.mp3
│
└── termux/
    └── setup.sh
```

---

## 🛠️ Requirements

- Android phone
- Termux
- Python 3
- Your own Wi-Fi hotspot/network
- A second device for testing
- Your own audio file, if required

---

## 📱 Termux Setup

Update Termux packages:

```bash
pkg update
pkg upgrade
```

Install Python:

```bash
pkg install python
```

Clone the repository:

```bash
git clone https://github.com/omharde42/wifi-captive-portal-lab.git
```

Enter the portal directory:

```bash
cd wifi-captive-portal-lab/portal
```

Start the local server:

```bash
python -m http.server 8080
```

The portal will be available locally at:

```text
http://127.0.0.1:8080
```

---

## 📡 Test Network

For the demonstration, you can use your own Android hotspot.

Suggested SSID:

```text
BT Viman Nagar 5GHz
```

The **5 GHz** portion is only a name unless the hotspot/access point actually operates on the 5 GHz band.

Connect your test computer or second phone to your own hotspot.

---

## 🔊 Audio

Place your own audio file here:

```text
portal/assets/audio.mp3
```

The user must press **Play Audio** to start playback.

The project does **not** attempt to:

- Force system volume to 100%
- Bypass device volume controls
- Override silent/DND settings
- Play unexpectedly loud audio
- Control another device's speakers

Browser and operating-system volume controls remain authoritative.

---

## 🌐 Captive Portal Limitation

A normal Termux HTTP server provides the **portal webpage**, but stock Android hotspot functionality does not give Termux complete control over DHCP, DNS, and captive-portal redirection.

Therefore:

```text
Connect to Wi-Fi
       ↓
Automatic portal
```

is **not guaranteed** with stock Android hotspot.

For a genuine captive-portal deployment, use a router/access point that supports captive-portal functionality.

---

## 🔐 Security

This project is intentionally designed as a benign network laboratory.

It does not provide functionality for:

- Credential harvesting
- Phishing
- HTTPS interception
- Traffic sniffing
- Unauthorized network access
- Device exploitation
- Volume-control bypasses
- Malware delivery

Only test on infrastructure and devices you are authorized to control.

---

## 📜 License

See [`LICENSE`](LICENSE) for licensing information.

---

## 🎯 Project Purpose

The purpose of this project is to learn how:

- Captive portals work
- Local web servers operate
- Android/Termux can host web applications
- Wi-Fi authentication flows interact with webpages
- Browser audio policies work
- Network infrastructure differs from webpage functionality

This project is intended for **education, development, and authorized testing**.
