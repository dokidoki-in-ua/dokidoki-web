import Header from './components/header/Header'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex h-full min-h-full flex-col'>
            <Header />
            {children}
        </div>
    )
}
export default DefaultLayout
