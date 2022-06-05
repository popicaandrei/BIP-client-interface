import "./CitizenPage.scss"
import {useEffect, useState} from "react";
import {getUser} from "../../services/UserService";
import Navbar from "../../components/navbar/Navbar";
import {Card, Grid, Link, Spacer, Text} from "@nextui-org/react";
import Footer from "../../components/footer/Footer";
import ActivityTable from "../../components/activity-table/ActivityTable";
import {activityColumns} from "../../utils/CitizenUtil";
import {getActivities} from "../../services/CitizenService";


export function CitizenPage() {
    const user = getUser();
    const [activities, setActivities] = useState([])

    useEffect(() => {
        getActivities().then((data) => {
            setActivities(data);
        });
    }, []);

    const MockItem = ({text1, text2}) => {
        return (
            <Card color="secondary" css={{h: "$20"}}>
                <Text h6 size={15} color="white" css={{mt: 0}}>
                    {text1}
                </Text>
                <Text h4 color="white" css={{mt: 0}}>
                    {text2}
                </Text>
            </Card>
        );
    }

    return (
        <div>
            <header className="header-section">
                <Navbar user={user}/>
            </header>
            <Spacer y={2}/>
            <div className="citizen-container">
                <div className="cit-statistics-constainer">
                    <Grid.Container gap={4} justify="center">
                        <Grid fluid={70}>
                            <MockItem text1="Your wallet balance is: " text2="15 EGLD"/>
                        </Grid>
                        <Grid fluid={70}>
                            <MockItem text1="Total value received in rewards: " text2="344$"/>
                        </Grid>
                        <Grid fluid={70}>
                            <MockItem text1="Total incentives received: " text2="8 EGLD"/>
                        </Grid>
                    </Grid.Container>

                    <Link id="explorer" href="https://devnet-explorer.elrond.com/accounts/erd1hfw4zhllexu4mys02hyj25nu5vuerp8mczhgzuz8ckp74q6muxrs6s2tt0"
                          icon underline block color="text">
                        See all details on Elrond Explorer
                    </Link>
                </div>
                <Spacer y={1}/>
                <div className="activity-table">
                    <ActivityTable activities={activities} activityColumns={activityColumns}/>
                </div>
                <Spacer y={1}/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}