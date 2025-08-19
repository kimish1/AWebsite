import Page from '../page'
import Card from "../../components/Card/Card.tsx";
import data from '../../Fixtures/second.json'

function Second() {
    return (
        <div>
            <Page>
                <div className="cards second">
                    {data.map((object) => (
                        <Card key={object.id} title={object.title} buttonName={object.buttonName}>
                            <div className="description">
                                <img src={object.img} />
                            </div>
                        </Card>
                    ))}
                </div>
            </Page>
        </div>
    )
}
export default Second