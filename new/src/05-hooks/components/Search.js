import React, {useEffect, useState} from 'react';
import wikipedia from "../api/wikipedia";

const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!term) {
            return;
        }

        console.log(`Inside useEffect, term: ${term}`);

        const search = async () => {
            const {data} = await wikipedia.get('api.php', {params: {srsearch: term}})
            setResults(data.query.search);
        };

        const timeoutId = setTimeout(search, 500);

        // called before the next useEffect run
        return () => {
            clearTimeout(timeoutId);
        };
    }, [term]);

    const renderedResults = results.map((result, index) => {
        return <div key={result.pageid} className="item">
            <div className="right floated content">
                <a href={`https://en.wikipedia.org?curid=${result.pageid}`}
                   target='_blank'
                   className="ui button">Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
            </div>
        </div>
    });

    return <div className="ui styled">
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input type="text" className="input"
                       value={term}
                       onChange={(e) => {
                           setTerm(e.target.value)
                       }}/>
            </div>
        </div>
        <div className="ui celled list">
            {renderedResults}
        </div>
    </div>
};

export default Search;
