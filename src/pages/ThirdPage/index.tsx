import Page from '../page'
import data from "../../Fixtures/third.json";
import Card from "../../components/Card/Card.tsx";

function Third() {
    return (
        <div>
            <Page>
                <div className="cards third">
                    {data.map((object) => (
                        <Card key={object.id} title={object.title} buttonName={object.buttonName}>
                            <div className="price">${object.price}</div>
                            <div className="description">{object.description}</div>
                        </Card>
                    ))}
                </div>
            </Page>
        </div>
    )
}
export default Third