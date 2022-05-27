import {Avatar, Text} from "@nextui-org/react";
import "./Navbar.scss"

export default function Navbar({user}) {

    return (
        <header className="header-section">
            <nav className="nav">
                <div className="nav-title">
                    <Text h3 css={{textGradient: "45deg, $yellow700 -20%, $red600 100%",}}
                          weight="bold">{user.institutionName} City Portal</Text>
                </div>

                <div className="nav-items">
                    <Avatar text={user.name} color="gradient" textColor="white" size="lg"/>
                    <Text h4 weight="bold"
                          css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}}>Welcome, {user.name} </Text>
                    <Text h4 weight="bold"
                              css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}}>Logout</Text>
                </div>
            </nav>
        </header>
    )
}