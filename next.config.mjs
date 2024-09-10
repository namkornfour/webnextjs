/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // Ignore TypeScript errors during the build process
        ignoreBuildErrors: true,
      },      
    // experimental: {
    //   serverActions: true,
    // }    
};

export default nextConfig;
