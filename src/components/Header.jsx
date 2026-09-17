function Header() {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return <div>
        <p>Today: {formatted}</p>
    </div>;
}

export default Header 