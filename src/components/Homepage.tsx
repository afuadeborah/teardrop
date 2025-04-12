const Homepage = () => {
    return (
        <div className="double-border d-flex flex-column align-items-center p-4 mt-5 text-white homepage-content text-center">
            <div className="p-4">
                <h1 className="heading mb-3">Tear(Drop)</h1>
                <p>
                    An exploration of impactful experiences and the emotions
                    evoked from their memory. As you interact with the display,
                    don't forget to <span>look up</span>
                </p>
                <div className="btn-group mt-3">
                    <a
                        href="/control"
                        className="btn link-button me-3 px-4">
                        Control
                    </a>
                    <a
                        href="/display"
                        className="btn link-button px-4">
                        Display
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
