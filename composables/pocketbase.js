import PocketBase from 'pocketbase'


//const appConfig = useAppConfig()
const pb = new PocketBase('https://api.nowarlab.com')

export const usePocketbase = () => {
    return pb
}