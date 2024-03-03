/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {unoptimized: true},
    env: {
        arbiscan_key: process.env.ARBISCAN_KEY,
        etherscan_key: process.env.ETHERSCAN_KEY,
    }
}
export default nextConfig;
