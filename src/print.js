function printInfo(obj, info) {
     const card = 
                    `
                    <div class="column is-one-third">
                         <div class="card">
                              <header class="card-header" style="height: 60px;">
                                   <div class="card-header-title">
                                        ${obj.name}
                                   </div>
                              </header>
                              <div class="card-content">
                                   <div class="content">
                                        <ul style="list-style: none;">
                                             <li>${obj.role}</span></li> 
                                             <li>ID: <span>${obj.id}</span></li>
                                             <li>E-mail: <span><a href=mailto:${obj.email}>${obj.email}</a></span></li>
                                             <li>${info}</li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
                    `
     return card;                    
}

module.exports = printInfo;