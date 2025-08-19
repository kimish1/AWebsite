import Page from '../page'
import data from '../../Fixtures/first.json'
import Card from "../../components/Card/Card.tsx";
function First() {
    return (
        <div>
            <Page>
                <div className="cards">
                    {data.map((object) => (
                        <Card key={object.id} title={object.title} buttonName={object.buttonName}>
                            <div className="description">
                                <ul>
                                    {object.list.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </Page>
        </div>
    )
}
export default First