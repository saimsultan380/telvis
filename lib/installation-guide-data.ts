import { supportConfig } from "@/lib/site";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type GuideSectionData = {
  id: string;
  label: string;
  title: string;
  blocks: GuideBlock[];
};

export type TroubleshootingTopic = {
  id: string;
  title: string;
  blocks: GuideBlock[];
};

export function formatGuideText(text: string) {
  return text
    .replaceAll("{{email}}", supportConfig.email)
    .replaceAll("{{whatsapp}}", supportConfig.whatsappUrl)
    .replaceAll("{{code}}", supportConfig.downloaderCode);
}

export const beforeYouBeginSection: GuideSectionData = {
  id: "before-you-begin",
  label: "Before You Begin",
  title: "What You Need Before IPTV Installation",
  blocks: [
    {
      type: "p",
      text: "Before following this IPTV installation guide, make sure you have the following:",
    },
    {
      type: "ul",
      items: [
        "An active IPTV account: You need valid Telvis subscription details or trial access.",
        "A compatible IPTV player: Choose an app supported by your device.",
        "Your IPTV login: This may include a username, password and server URL.",
        "An M3U playlist: Use the playlist link supplied for your account if your player supports M3U.",
        "A stable internet connection: Connect your device to reliable Wi-Fi or Ethernet.",
        "Updated software: Keep your device and IPTV player updated to avoid compatibility problems.",
      ],
    },
    {
      type: "p",
      text: "Telvis setup details may be supplied in a supported login format. If you are unsure whether to use Xtream Codes IPTV or an M3U playlist, contact support before entering your account information.",
    },
  ],
};

export const installationDeviceTabs: GuideSectionData[] = [
  {
    id: "firestick",
    label: "Firestick",
    title: "How to Install IPTV on Firestick and Fire TV",
    blocks: [
      {
        type: "p",
        text: "Setting up IPTV for Firestick is a straightforward process when you have an active subscription and a compatible IPTV player. You can use an app available through the Amazon Appstore or another installation method supported by your Fire TV device.",
      },
      { type: "h3", text: "Step 1: Open Firestick Settings" },
      {
        type: "p",
        text: "Switch on your Firestick, connect it to the internet and open the home screen. Go to the Find or Search option to look for a compatible IPTV player.",
      },
      { type: "h3", text: "Step 2: Install an IPTV Player" },
      {
        type: "p",
        text: "Search for an IPTV player available in the Amazon Appstore. Select the app, review its publisher and permissions, and install it.",
      },
      { type: "h3", text: "Step 3: Open the IPTV Application" },
      {
        type: "p",
        text: "Launch the player and select the login method supported by your Telvis account. This may be Xtream Codes or an M3U playlist.",
      },
      { type: "h3", text: "Step 4: Enter Your IPTV Login" },
      {
        type: "p",
        text: "For Xtream Codes, enter your supplied username, password and server URL. If you are using an M3U playlist, paste the complete playlist address into the relevant field.",
      },
      { type: "h3", text: "Step 5: Load Your IPTV Channels" },
      {
        type: "p",
        text: "Allow the player to process your IPTV playlist. Once the available categories and programme information have loaded, select a channel to begin watching.",
      },
      { type: "h3", text: "IPTV Setup Firestick: Helpful Tips" },
      {
        type: "ul",
        items: [
          "Use a stable Wi-Fi or Ethernet connection.",
          "Keep your Fire TV software and IPTV player updated.",
          "Check that your login details are entered correctly.",
          "Restart the player if your playlist does not load.",
          "Use only trusted installation sources.",
        ],
      },
      {
        type: "p",
        text: "If an app is not available in the Amazon Appstore, check the app developer's official installation instructions and your device's security settings before proceeding.",
      },
    ],
  },
  {
    id: "android-tv",
    label: "Android TV",
    title: "How to Install IPTV on Android TV and Google TV",
    blocks: [
      {
        type: "p",
        text: "You can install IPTV for Android TV through the Google Play Store using a compatible IPTV player. This method is suitable for supported Sony, Philips, TCL, Hisense and other Android TV or Google TV models.",
      },
      {
        type: "ol",
        items: [
          "Switch on your television and connect it to a reliable internet connection. Make sure you are signed in to the Google account required to download apps.",
          "Go to the Apps section and open Google Play Store. Search for an IPTV player such as TiviMate or IPTV Smarters Pro.",
          "Select an app that is compatible with your television and install it. Wait until the download and installation are complete.",
          "Open the player and choose the supported login option. Enter your Telvis username, password and server URL, or add your M3U playlist link.",
          "Allow the application to synchronise your available channels, movies, series and programme information.",
        ],
      },
      { type: "h3", text: "IPTV Setup Android: Improve Your Experience" },
      {
        type: "ul",
        items: [
          "Keep the Android TV operating system updated.",
          "Use a compatible player designed for TV navigation.",
          "Connect through Ethernet where possible.",
          "Refresh the playlist if categories are missing.",
          "Close unused apps to free device resources.",
        ],
      },
    ],
  },
  {
    id: "android-box",
    label: "Android Box",
    title: "How to Install IPTV on an Android Box",
    blocks: [
      {
        type: "p",
        text: "An Android Box can turn a compatible television into an IPTV streaming device. The process is similar to Android TV because most supported boxes provide access to Google Play Store.",
      },
      {
        type: "ol",
        items: [
          "Use an HDMI cable to connect your box to the television. Switch it on and connect it to your home internet.",
          "Open Google Play Store and search for a compatible IPTV player. Check that the application supports your device and subscription login.",
          "Download the selected IPTV player and open it from the Apps menu.",
          "Choose Xtream Codes or M3U, depending on the login details supplied with your subscription. Enter the information carefully.",
          "Allow the player to load your available content. Open the channel list and select the category you want to explore.",
        ],
      },
      {
        type: "p",
        text: "A wired Ethernet connection can help if your Wi-Fi signal is weak or inconsistent.",
      },
    ],
  },
  {
    id: "samsung",
    label: "Samsung TV",
    title: "How to Install IPTV on Samsung Smart TV",
    blocks: [
      {
        type: "p",
        text: "IPTV for Samsung TV requires an application compatible with the Samsung Tizen operating system. Samsung TVs do not install standard Android APK files, so you need to use an IPTV player available through the Samsung Apps store.",
      },
      {
        type: "ol",
        items: [
          "Switch on your television and connect it to the internet. Make sure your TV software is updated.",
          "Press the Home button on your Samsung remote. Open Apps and use the search option to find an IPTV player supported by your TV.",
          "Choose an available IPTV application and select Install. Once installed, open the application.",
          "Depending on the app, enter Xtream Codes details directly, or use a device ID or MAC address and add your M3U playlist through the app developer's official portal.",
          "Follow the app's activation instructions. Once your playlist has been linked and loaded, refresh the channel list and select your preferred content.",
        ],
      },
      { type: "h3", text: "IPTV Setup Samsung: What to Check" },
      {
        type: "ul",
        items: [
          "Confirm that the IPTV player supports your Samsung TV model.",
          "Check the Samsung Apps store for current availability.",
          "Do not try to install Android-only applications such as TiviMate directly on Tizen.",
          "Follow the app developer's instructions if playlist activation requires a website.",
        ],
      },
      {
        type: "p",
        text: "If your Samsung TV does not offer a suitable player, you can connect a Fire TV Stick or Android TV device through HDMI.",
      },
    ],
  },
  {
    id: "lg",
    label: "LG TV",
    title: "How to Install IPTV on LG Smart TV",
    blocks: [
      {
        type: "p",
        text: "To use IPTV for LG TV, you need a compatible application available through the LG Content Store or the Apps section of your television. LG Smart TVs use webOS, which is different from Android TV.",
      },
      {
        type: "ol",
        items: [
          "Switch on your LG television and connect it to your Wi-Fi or Ethernet network.",
          "Press the Home button on your remote and open the LG Content Store or Apps section, depending on your webOS version.",
          "Look for a compatible IPTV application. App names and availability may vary according to your TV model and region.",
          "Select the player and complete the installation. Open the app once it appears in your installed applications.",
          "Enter your Xtream Codes login or follow the application's M3U playlist activation process. Some players require you to link your TV using a device ID or MAC address.",
          "Refresh the playlist if required. Once the channels and categories appear, select a channel to start streaming.",
        ],
      },
      {
        type: "p",
        text: "TiviMate is not designed for LG webOS, so you should not try to install its Android version directly on an LG television. If your TV does not list a suitable player, connect a compatible Firestick or Android TV box instead.",
      },
    ],
  },
  {
    id: "sony",
    label: "Sony TV",
    title: "How to Install IPTV on Sony Smart TV",
    blocks: [
      {
        type: "p",
        text: "Many Sony Smart TVs use Google TV or Android TV, which allows you to install compatible IPTV applications from Google Play Store.",
      },
      {
        type: "ol",
        items: [
          "Connect your Sony TV to the internet.",
          "Open Google Play Store from the Apps section.",
          "Search for a compatible IPTV player and install it.",
          "Open the application and select Xtream Codes or M3U login.",
          "Enter your Telvis account details or playlist URL.",
          "Allow the application to load your content and select a channel.",
        ],
      },
      {
        type: "p",
        text: "The exact IPTV setup Sony process depends on the television's operating system and model. Check your TV settings if you are unsure whether it runs Android TV or Google TV.",
      },
    ],
  },
  {
    id: "philips",
    label: "Philips TV",
    title: "How to Install IPTV on Philips Smart TV",
    blocks: [
      {
        type: "p",
        text: "IPTV for Philips TV depends on the operating system installed on your television. Some Philips models use Android TV or Google TV, while others use a different platform.",
      },
      {
        type: "ol",
        items: [
          "Connect your Philips TV to the internet.",
          "Open Google Play Store if your model uses Android TV or Google TV. Otherwise, open the television's own app store.",
          "Search for an IPTV player supported by your TV.",
          "Install and launch the application.",
          "Add your IPTV login details or M3U playlist URL.",
          "Refresh the playlist and browse the available channels.",
        ],
      },
      {
        type: "p",
        text: "If your Philips model does not support a suitable IPTV player, use an external streaming device connected through HDMI.",
      },
    ],
  },
  {
    id: "hisense",
    label: "Hisense TV",
    title: "How to Install IPTV on Hisense Smart TV",
    blocks: [
      {
        type: "p",
        text: "The IPTV setup Hisense process depends on whether your television uses Google TV, Android TV, VIDAA or another operating system. Not every Hisense model supports the same IPTV applications.",
      },
      {
        type: "ol",
        items: [
          "Connect your Hisense TV to your home internet.",
          "Open the TV's app store.",
          "Search for an IPTV player compatible with your operating system.",
          "Install the selected application and open it.",
          "Enter your Telvis account details or add the M3U playlist if supported.",
          "Allow the application to load the playlist and select your preferred content.",
        ],
      },
      {
        type: "p",
        text: "If your Hisense TV does not list a compatible app, you can use a Fire TV Stick or Android TV box as an alternative.",
      },
    ],
  },
  {
    id: "tcl",
    label: "TCL TV",
    title: "How to Install IPTV on TCL Smart TV",
    blocks: [
      {
        type: "p",
        text: "TCL televisions are available with different operating systems, including Google TV, Android TV and Roku TV. The correct IPTV player depends on your model.",
      },
      {
        type: "ol",
        items: [
          "Open your TCL TV settings and check its operating system.",
          "If it uses Google TV or Android TV, open Google Play Store.",
          "Search for a compatible IPTV player and install it.",
          "Launch the application and select your login method.",
          "Enter your username, password and server URL, or add your M3U playlist.",
          "Refresh the content list and start watching.",
        ],
      },
      {
        type: "p",
        text: "If you have a TCL Roku TV, follow the Roku guide because the app options are different.",
      },
    ],
  },
  {
    id: "roku",
    label: "Roku",
    title: "How to Install IPTV on Roku and Roku TV",
    blocks: [
      {
        type: "p",
        text: "IPTV for Roku has more limitations than IPTV for Firestick or Android TV. Roku's app ecosystem does not offer the same range of dedicated IPTV players, and Roku Media Player's M3U playlist support is intended for compatible local or network media files, not a general-purpose IPTV subscription login.",
      },
      {
        type: "ol",
        items: [
          "Connect your Roku device or Roku TV to the internet.",
          "Open the Roku Channel Store and search for available media or streaming applications.",
          "Check the app description to confirm whether it supports your required playlist or streaming method.",
          "Install an application only if it supports the format supplied with your subscription.",
          "Follow the application's instructions to add and play compatible content.",
        ],
      },
      {
        type: "p",
        text: "If you cannot find a suitable IPTV player, use a Firestick, Google TV or Android TV device connected to the same television. This is generally a more practical option for a subscription that uses Xtream Codes or an IPTV playlist.",
      },
    ],
  },
  {
    id: "nvidia-shield",
    label: "NVIDIA Shield",
    title: "How to Install IPTV on NVIDIA Shield TV",
    blocks: [
      {
        type: "p",
        text: "NVIDIA Shield TV runs Android TV, so you can use compatible Android TV IPTV players such as TiviMate or IPTV Smarters Pro where available.",
      },
      {
        type: "ol",
        items: [
          "Connect your NVIDIA Shield TV to your television and internet.",
          "Open Google Play Store.",
          "Search for a compatible IPTV player and install it.",
          "Launch the app and select the Xtream Codes or M3U login option.",
          "Enter your account details or playlist URL.",
          "Allow the playlist and EPG information to load, then select a channel.",
        ],
      },
      {
        type: "p",
        text: "For better stability, consider connecting your Shield TV through Ethernet if your router is nearby.",
      },
    ],
  },
  {
    id: "ios",
    label: "iPhone",
    title: "How to Install IPTV on iPhone",
    blocks: [
      {
        type: "p",
        text: "You can complete IPTV setup on iPhone through a compatible IPTV player available in the Apple App Store. Choose an application that supports the login format supplied with your subscription.",
      },
      {
        type: "ol",
        items: [
          "Open the Apple App Store on your iPhone.",
          "Search for a compatible IPTV player and install it.",
          "Open the application and select the available login method.",
          "Enter your IPTV username, password and server URL, or paste your M3U playlist link.",
          "Allow the application to process the playlist.",
          "Browse the available channels and select one to start playing.",
        ],
      },
      {
        type: "p",
        text: "Keep your iPhone connected to a reliable Wi-Fi or mobile data connection for smoother playback.",
      },
    ],
  },
  {
    id: "ipad",
    label: "iPad",
    title: "How to Install IPTV on iPad",
    blocks: [
      {
        type: "p",
        text: "The IPTV setup iPad process is similar to the iPhone installation method. You need an IPTV player that supports your iPadOS version and subscription login format.",
      },
      {
        type: "ol",
        items: [
          "Open the App Store on your iPad.",
          "Search for an IPTV player compatible with iPad.",
          "Download and open the application.",
          "Select Xtream Codes or M3U playlist login.",
          "Enter your account credentials or playlist URL.",
          "Wait for the channels and available content to load.",
        ],
      },
      {
        type: "p",
        text: "Once setup is complete, you can browse the available content using the iPad's touchscreen.",
      },
    ],
  },
  {
    id: "apple-tv",
    label: "Apple TV",
    title: "How to Install IPTV on Apple TV",
    blocks: [
      {
        type: "p",
        text: "You can use IPTV on Apple TV through a compatible tvOS application. The selected player must support the playlist or login format supplied with your subscription.",
      },
      {
        type: "ol",
        items: [
          "Connect your Apple TV to your television and internet.",
          "Open the App Store from the Apple TV home screen.",
          "Search for an IPTV player compatible with tvOS.",
          "Install and launch the selected application.",
          "Enter your IPTV login details or M3U playlist URL.",
          "Allow the player to load your content and select a channel.",
        ],
      },
      {
        type: "p",
        text: "Do not assume that every iPhone or iPad IPTV application also supports Apple TV. Check the app's platform compatibility before installing.",
      },
    ],
  },
  {
    id: "windows",
    label: "Windows",
    title: "How to Install IPTV on Windows PC or Laptop",
    blocks: [
      {
        type: "p",
        text: "You can watch IPTV on a Windows computer using a compatible media player. The process usually involves installing a player and adding your M3U playlist or supported login details.",
      },
      {
        type: "ol",
        items: [
          "Open Microsoft Store or the official website of your selected media player.",
          "Download and install a compatible IPTV player.",
          "Launch the application and open its playlist or network stream settings.",
          "Paste your M3U playlist URL or enter the login information supported by the player.",
          "Save the playlist and allow the channels to load.",
          "Select a channel to begin streaming.",
        ],
      },
      {
        type: "p",
        text: "You can also use a supported player such as VLC for compatible network streams. Keep the player updated and avoid downloading software from untrusted websites.",
      },
    ],
  },
  {
    id: "mac",
    label: "Mac",
    title: "How to Install IPTV on Mac and MacBook",
    blocks: [
      {
        type: "p",
        text: "For IPTV setup Mac users need a compatible macOS player that can open the playlist format supplied with their subscription.",
      },
      {
        type: "ol",
        items: [
          "Download a compatible IPTV player from the Mac App Store or its official website.",
          "Install the application and open it.",
          "Find the option to add a playlist or network stream.",
          "Enter your M3U playlist URL or other supported login details.",
          "Save the information and allow the channel list to load.",
          "Select your preferred channel and start playback.",
        ],
      },
      {
        type: "p",
        text: "For a more stable experience, keep macOS updated and use a reliable internet connection.",
      },
    ],
  },
  {
    id: "xbox",
    label: "Xbox",
    title: "How to Install IPTV on Xbox One and Xbox Series X|S",
    blocks: [
      {
        type: "p",
        text: "You can use IPTV on supported Xbox consoles through compatible media applications available in the Microsoft Store. MyIPTV Player and Kodi are options to check, although app availability can change by region and console.",
      },
      {
        type: "ol",
        items: [
          "Open Microsoft Store on your Xbox.",
          "Search for a compatible player such as MyIPTV Player and install it if available.",
          "Launch the application and open its playlist settings.",
          "Add your M3U playlist URL under the remote channel list option.",
          "If you have an EPG URL, add it as a separate programme guide source.",
          "Save the settings and refresh the playlist and EPG.",
          "Open the channel section and select the content you want to watch.",
        ],
      },
      {
        type: "p",
        text: "MyIPTV Player uses playlist-based setup, so if you have only Xtream Codes credentials, ask your provider whether an M3U link is available for your account.",
      },
    ],
  },
  {
    id: "playstation",
    label: "PlayStation 5",
    title: "Can You Install IPTV on PS5?",
    blocks: [
      {
        type: "p",
        text: "IPTV for PS5 is more limited than IPTV on Xbox. The PlayStation Store does not currently offer a general-purpose IPTV player for adding standard M3U playlists or Xtream Codes logins. A dedicated IPTV setup PS5 process is therefore not available in the same way as on Android TV or Firestick.",
      },
      {
        type: "p",
        text: "If you want to watch your IPTV subscription on the same television, connect a compatible Firestick, Android TV device or streaming box through another HDMI port. You can then use a supported IPTV player on that device.",
      },
    ],
  },
  {
    id: "mag-portal",
    label: "MAG Box",
    title: "How to Install IPTV on MAG Box",
    blocks: [
      {
        type: "p",
        text: "MAG devices use portal-based configuration rather than the usual Android IPTV player installation process. You need the portal URL supplied for your compatible MAG device.",
      },
      {
        type: "ol",
        items: [
          "Connect your MAG Box to your television using an HDMI cable.",
          "Connect the device to the internet.",
          "Open Settings from the MAG home screen.",
          "Find the system or server portal configuration option.",
          "Enter the portal URL supplied for your account.",
          "Save the settings and restart the device if required.",
          "Allow the portal to connect and load the available content.",
        ],
      },
      {
        type: "p",
        text: "Make sure the subscription and portal details specifically support your MAG device before completing the configuration.",
      },
    ],
  },
  {
    id: "enigma2",
    label: "Enigma2",
    title: "How to Set Up IPTV on Enigma2",
    blocks: [
      {
        type: "p",
        text: "Enigma2 receivers use a different setup process from Smart TVs and Android boxes. Installation depends on the receiver model, installed image and compatible plugin.",
      },
      {
        type: "ol",
        items: [
          "Connect your Enigma2 receiver to the television and internet.",
          "Check the receiver's software version and available IPTV plugins.",
          "Use a compatible playlist or configuration method supported by your receiver.",
          "Add the authorised playlist details supplied for your subscription.",
          "Save the configuration and restart the relevant service or receiver if required.",
          "Open the channel list and check whether the available content has loaded.",
        ],
      },
      {
        type: "p",
        text: "Because Enigma2 configurations vary, follow the instructions for your exact receiver model. Avoid installing unknown plugins or configuration files.",
      },
    ],
  },
  {
    id: "chromecast",
    label: "Chromecast",
    title: "How to Install IPTV on Chromecast with Google TV",
    blocks: [
      {
        type: "p",
        text: "Chromecast with Google TV uses an Android TV-compatible IPTV player. Follow the same approach as Android TV or Google TV.",
      },
      {
        type: "ol",
        items: [
          "Connect Chromecast with Google TV to your television and internet.",
          "Open Google Play Store and search for a compatible IPTV player.",
          "Install and open the player.",
          "Enter your Xtream Codes details or M3U playlist URL.",
          "Allow categories and EPG information to load, then select a channel.",
        ],
      },
    ],
  },
];

export const xtreamCodesSection: GuideSectionData = {
  id: "xtream-codes",
  label: "Xtream Codes",
  title: "Best IPTV App and IPTV Player Options",
  blocks: [
    {
      type: "p",
      text: "An IPTV app is the media player used to load and play your subscription. It does not automatically include channels or a subscription. You need to add your own authorised playlist or account details.",
    },
    {
      type: "p",
      text: "The best IPTV app depends on the device you own and the login format provided with your subscription. For Android TV, TiviMate is designed for television screens and remote controls. IPTV Smarters Pro is another option on platforms where its app is available. Always check the official app store on your device before installing.",
    },
    { type: "h3", text: "IPTV Smarters Pro" },
    {
      type: "p",
      text: "IPTV Smarters Pro is a media player available on several supported platforms. Where the app is listed for your device, you can install it and add your subscription using the supported login method.",
    },
    { type: "h3", text: "TiviMate IPTV" },
    {
      type: "p",
      text: "TiviMate IPTV is designed for Android TV devices. It supports playlist management and an electronic programme guide, but it is not designed for Samsung Tizen, LG webOS, iPhone or iPad.",
    },
    { type: "h3", text: "MyIPTV Player" },
    {
      type: "p",
      text: "MyIPTV Player is an option for supported Windows and Xbox devices. It can load an M3U playlist and a separate EPG source where supported.",
    },
    { type: "h3", text: "Smart IPTV and Other Smart TV Players" },
    {
      type: "p",
      text: "Smart IPTV, SET IPTV and similar applications may be available for selected Samsung and LG televisions. Check your TV's app store because the available apps can differ by model and region.",
    },
  ],
};

export const refreshEpgSection: GuideSectionData = {
  id: "refresh-epg",
  label: "EPG",
  title: "IPTV EPG Guide: How to Load Programme Information",
  blocks: [
    {
      type: "p",
      text: "An IPTV EPG guide, or Electronic Programme Guide, displays programme names, schedules and other available TV information. Some players load EPG data automatically, while others require a separate EPG URL.",
    },
    {
      type: "p",
      text: "To update your IPTV EPG guide:",
    },
    {
      type: "ol",
      items: [
        "Open your IPTV player.",
        "Go to Settings or Playlist Management.",
        "Find the EPG or TV Guide option.",
        "Select Refresh or Update EPG.",
        "Wait for the programme information to load.",
      ],
    },
    {
      type: "p",
      text: "If the guide remains empty, check whether your subscription includes EPG data and whether your player supports the supplied format.",
    },
  ],
};

export const troubleshootingTopics: TroubleshootingTopic[] = [
  {
    id: "buffering",
    title: "IPTV buffering",
    blocks: [
      {
        type: "p",
        text: "Check Wi-Fi strength, internet speed and other network activity. Restart your router and IPTV player, use a wired connection where possible, and close unnecessary background applications.",
      },
    ],
  },
  {
    id: "not-loading",
    title: "IPTV not loading",
    blocks: [
      {
        type: "p",
        text: "Restart the app and refresh the playlist. Confirm that your IPTV account is active.",
      },
    ],
  },
  {
    id: "login-error",
    title: "IPTV login error",
    blocks: [
      {
        type: "p",
        text: "Re-enter the username, password and server URL carefully. Credentials are case-sensitive.",
      },
    ],
  },
  {
    id: "channels-missing",
    title: "Channels missing",
    blocks: [
      {
        type: "p",
        text: "Refresh the playlist and check whether the channel is currently listed.",
      },
    ],
  },
  {
    id: "epg-not-working",
    title: "EPG not working",
    blocks: [
      {
        type: "p",
        text: "Update the EPG source and check its URL. Confirm that your player supports the supplied EPG format.",
      },
    ],
  },
  {
    id: "app-crashing",
    title: "App keeps crashing",
    blocks: [
      {
        type: "p",
        text: "Update the app or restart your device. Free storage space if the device is nearly full.",
      },
    ],
  },
  {
    id: "connection-error",
    title: "Connection error",
    blocks: [
      {
        type: "p",
        text: "Check your internet and verify the server details supplied with your account.",
      },
    ],
  },
  {
    id: "m3u-not-working",
    title: "M3U playlist not working",
    blocks: [
      {
        type: "p",
        text: "Confirm that the full playlist URL is correct and active. Do not share your password publicly.",
      },
    ],
  },
];
