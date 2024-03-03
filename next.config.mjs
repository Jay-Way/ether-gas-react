/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {unoptimized: true},
    env: {
        etherscan_key: process.env.ETHERSCAN_KEY,
        alchemy_key_op: process.env.ALCHEMY_KEY,
    }
}
export default nextConfig;
