import './Content.scss';

export const Content = ({chars}) => {
    return (
        <section className="content">
            {chars.results ?
                chars.results.map(char => (
                    <div className="content__card" key={char.id}>
                        {char.name}
                    </div>
                )) : <div className="loading">Loading chars...</div>}
        </section>
    );
};