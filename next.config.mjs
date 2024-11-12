/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // Ignore TypeScript errors during the build process
        ignoreBuildErrors: true,
      },      
      eslint: {
        ignoreDuringBuilds: true,
      },
      //reactStrictMode: false
    // experimental: {
    //   serverActions: true,
    // }    
};

export default nextConfig;
