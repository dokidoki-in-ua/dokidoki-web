import Header from "./components/header/Header"

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col h-full min-h-full'>
            <Header/>
            {children}
        </div>
    )
}
export default DefaultLayout
