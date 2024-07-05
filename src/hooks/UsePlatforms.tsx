import UseData from "./UseData"

interface Platforms{
    id:number,
    name :string,
    slg:string
}

const UsePlatforms =()=> UseData<Platforms>('/platforms/lists/parents');

export default UsePlatforms;