<Login handleUsernameInput={handleUsernameInput} handlePasswordInput={handlePasswordInput} handleSubmit={handleSubmit} />
            <hr />
            <label>{username}</label>
            <p />
            <label>{password}</label>
            <p />
{ postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
<p />
{ token }