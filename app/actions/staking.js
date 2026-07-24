'use server'

import StakePackage from "@/models/StakePackage";

async function getPackages() {
    const packages = await StakePackage.find().lean();
    return packages.map((pkg) => ({
        ...pkg,
        _id: pkg._id.toString(),
        createdAt: pkg.createdAt.toISOString(),
        updatedAt: pkg.updatedAt.toISOString(),
    }));
}

// async function getHistory(){
//     const history = await 
// }

export { getPackages };