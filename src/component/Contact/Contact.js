import React from 'react';

const Contact = () => {
    return (
        <div className="m-4">
            <div class=" px-4">
                <div class="row gx-5">
                    <div class="col">
                    <div class="p-3">

                    <div class="mb-3 m">
                        <input type="email" class="form-control" placeholder="Email"></input>
                        <input type="password" class="form-control" placeholder="Password"></input>
                        <input type="email" class="form-control" placeholder="Address"></input>
                    </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button className="btn btn-primary">Send Massage</button>
                    </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="p-3">
                        <h2>Contact Info</h2>
                        <p>We denounce with righteous indignation in and dislike men who are so beguiled and to demo realized by the charms of pleasure moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound</p>
                        <ul>
                            <li>374 William S Canning Blvd, Fall River MA 2721, USA</li>
                            <li>(+880)172-6278251</li>
                            <li>info@qizbari.com</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;