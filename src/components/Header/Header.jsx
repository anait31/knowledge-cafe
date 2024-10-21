import logo from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='max-w-7xl mx-auto flex items-center justify-between py-2 border-b-2 border-cyan-400'>
            <h1 className='text-2xl font-bold'>React Knowledge Cafe</h1>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;