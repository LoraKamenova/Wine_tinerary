import './AddDestination.css'
import FormHeader from "../../Other/FormHeader/FormHeader";
import * as destinationService from "../../../services/destinationService";
import { useHistory } from "react-router-dom"

const AddDestination = () => {
    const history = useHistory();

        const onCreateDestinationSubmitHandler = (e) => {
            e.preventDefault();
            console.log(e.target.name.value)

            const { name, description, address, services, logoUrl, imageUrl1, imageUrl2, mapUrl } = e.target;

            destinationService.create(
                name.value,
                description.value,
                address.value,
                services.value,
                logoUrl.value,
                imageUrl1.value,
                imageUrl2.value,
                mapUrl.value)
                .then(() => {
                    history.push('/all-destinations')
                })
        };

    return (

        <section className="general-form-wrapper add-destination-form-wrapper">
            <FormHeader title="Нова дестинация"/>

            <form className="general-form" onSubmit={onCreateDestinationSubmitHandler}>
                <section className="general-form-main-section">

                        <div className="general-form-field-wrapper">
                            <div className="general-form-field-heading">
                                <label htmlFor="name">Име:</label>
                            </div>
                            <input className="general-form-field-input" type="text" id="name" name="name"/>
                        </div>

                        <div className="general-form-field-wrapper">
                            <div className="general-form-field-heading">
                                <label htmlFor="address">Адрес:</label>
                            </div>
                            <input className="general-form-field-input" type="text" id="address" name="address"/>
                        </div>

                        <div className="general-form-field-wrapper">
                            <div className="general-form-field-heading">
                                <label htmlFor="description">Текст:</label>
                            </div>
                            <textarea className="general-form-field-input" rows="11" id="description" name="description"/>
                        </div>


                        <div className="general-form-field-wrapper">
                            <div className="general-form-field-heading">
                                <label htmlFor="services">Услуги:</label>
                            </div>
                            <input className="general-form-field-input" type="text" id="services" name="services"/>
                        </div>

                        <div className="general-form-field-wrapper">
                            <div className="general-form-field-heading">
                                <label htmlFor="imageUrl1">URL към снимка 1:</label>
                            </div>
                            <input className="general-form-field-input" type="text" id="imageUrl1" name="imageUrl1"/>
                        </div>

                        <div className="general-form-field-wrapper">
                            <div className="general-form-field-heading">
                                <label htmlFor="imageUrl2">URL към снимка 2:</label>
                            </div>
                            <input className="general-form-field-input" type="text" id="imageUrl2" name="imageUrl2"/>
                        </div>

                        <div className="general-form-field-wrapper">
                            <div className="general-form-field-heading">
                                <label htmlFor="mapUrl">URL към карта:</label>
                            </div>
                            <input className="general-form-field-input" type="text" id="mapUrl" name="mapUrl"/>
                        </div>

                        <div className="general-form-field-wrapper">
                            <div className="general-form-field-heading">
                                <label htmlFor="logoUrl">URL към лого:</label>
                            </div>
                            <input className="general-form-field-input" type="text" id="logoUrl" name="logoUrl"/>
                        </div>


                </section>

                <div className="general-form-button-wrapper">
                    <input className="general-form-button" type="submit" value="ИЗПРАТИ"/>
                </div>
            </form>
        </section>
    );
};

export default AddDestination;
