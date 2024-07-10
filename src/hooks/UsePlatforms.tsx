import platform from "../Data/platforms"

interface Platforms {
    id: number,
    name: string,
    slg: string
}

const UsePlatforms = () => ({ data: platform, error: null });

export default UsePlatforms;