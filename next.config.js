/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com",
    "icons.iconarchive.com",
    "upload.wikimedia.org",
    "code.visualstudio.com",
    "www.adobe.com",
    "cdn-icons-png.flaticon.com",
    "a.slack-edge.com",
    "static-00.iconduck.com",
    "www.iconarchive.com",
    "cdn2.iconfinder.com",
    "notepad-plus-plus.org",
    "www.win-rar.com",
    "www.videolan.org",
    "res.cloudinary.com",
    "d2nir1j4sou8ez.cloudfront.net",
    "repository-images.githubusercontent.com",
    "avatars.githubusercontent.com",
    "play-lh.googleusercontent.com",
  ],
  },
  env: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
