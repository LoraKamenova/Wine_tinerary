import './JournalDetails.css'
import JournalDetailsCard from "./JournalDetailsCard/JournalDetailsCard";

import * as journalService from "../../../services/journalService";

import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import UserContext from "../../../Context";

const JournalDetails = ({match}) => {
    const context = useContext(UserContext)
    const role = context.user.role;
    const userId = context.user.id;

    let [journal, setJournal] = useState({});

    useEffect(() => {
        journalService.getOne(match.params.journalId)
            .then(res => setJournal(res));
    }, []);

    let buttons;
    if (userId === journal.creatorId || role === "root") {
        buttons =
            <div className="jdc-button-wrapper">
                <Link className="button edit-button" to={`/journal/edit/${journal._id}`}>Редактирай<i className="fas fa-pencil-alt"></i></Link>
                <Link className="button delete-button" to={`/journal/delete/${journal._id}`}>Изтрий<i className="fas fa-times"></i></Link>
            </div>
    }

    return (
        <div className="custom-details-section journal-details-section-wrapper">
            <section className="journal-details-section">

                <JournalDetailsCard
                    title={journal.title}
                    place={journal.place}
                    time={journal.time}
                    imageUrl1={journal.imageUrl1}
                    imageUrl2={journal.imageUrl2}
                    description={journal.description}
                />
                {buttons}
            </section>
        </div>
    );
};

export default JournalDetails;
