<template>
    <div class="pt-4 pb-6 md:py-6">
        <div class="px-4 pb-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Settings</h1>
        </div>
        <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <!-- Content section -->

            <!-- Program Info -->
            <div
                class="relative px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6"
            >
                <div class="absolute right-8">
                    <label
                        for="is_public"
                        class="hidden text-sm font-medium leading-5 text-gray-700 sm:block"
                    >
                        Public
                    </label>
                    <span
                        v-model="isPublic"
                        @click="isPublic = !isPublic"
                        role="checkbox"
                        tabindex="0"
                        aria-checked="false"
                        :class="
                            `${
                                isPublic ? 'bg-primary' : 'bg-gray-200'
                            } relative inline-flex flex-shrink-0 h-6 w-11 mt-2 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline-teal`
                        "
                    >
                        <span
                            aria-hidden="true"
                            :class="
                                `${
                                    isPublic ? 'translate-x-5' : 'translate-x-0'
                                } relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`
                            "
                        >
                            <span
                                :class="
                                    `${
                                        isPublic
                                            ? 'opacity-0 ease-out duration-100'
                                            : 'opacity-100 ease-in duration-200'
                                    } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`
                                "
                            >
                                <svg
                                    class="w-3 h-3 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 12 12"
                                >
                                    <path
                                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                            <span
                                :class="
                                    `${
                                        isPublic
                                            ? 'opacity-100 ease-in duration-200'
                                            : 'opacity-0 ease-out duration-100'
                                    } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`
                                "
                            >
                                <svg
                                    class="w-3 h-3 text-primary"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path
                                        d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                    />
                                </svg>
                            </span>
                        </span>
                    </span>
                </div>
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                        <h3
                            class="mt-3 text-lg font-medium leading-6 text-gray-900 sm:mt-0"
                        >
                            Program
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-500">
                            This information will be displayed if you turn the
                            public switch on.
                        </p>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <div>
                                        <label
                                            for="program_name"
                                            class="block text-sm font-medium leading-5 text-gray-700"
                                            >Program Name</label
                                        >
                                        <div
                                            class="relative mt-1 rounded-md shadow-sm"
                                        >
                                            <input
                                                v-model="programName"
                                                id="program_name"
                                                class="block w-full form-input sm:text-sm sm:leading-5"
                                                placeholder="Animali"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="primary_species"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >Primary Species</label
                                >
                                <select
                                    v-model="primarySpecies"
                                    id="primary_species"
                                    class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                >
                                    <option value="whaleShark"
                                        >Whale Shark</option
                                    >
                                    <option value="mantaRay">Manta Ray</option>
                                    <option value="humpbackWhale"
                                        >Humpback Whale</option
                                    >
                                    <option value="dolphin">Dolphin</option>
                                    <option value="greatWhiteShark"
                                        >Great White Shark</option
                                    >
                                </select>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="description"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Description
                                </label>
                                <div class="rounded-md shadow-sm">
                                    <textarea
                                        v-model="description"
                                        id="description"
                                        rows="3"
                                        class="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                                        placeholder="Animali is a platform for endangered species..."
                                    ></textarea>
                                </div>
                                <p class="mt-2 text-sm text-gray-500">
                                    Brief description for your organization. Try
                                    to fit it into a tweet ;)
                                </p>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="program_mail"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >Program Contact Email</label
                                >
                                <div class="relative mt-1 rounded-md shadow-sm">
                                    <input
                                        v-model="programEmail"
                                        id="program_email"
                                        class="block w-full form-input sm:text-sm sm:leading-5"
                                        placeholder="info@organization.com"
                                    />
                                </div>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="area"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >World Region</label
                                >
                                <select
                                    v-model="locationArea"
                                    id="area"
                                    class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                >
                                    <option>N.America</option>
                                    <option>S.America</option>
                                    <option>Europe</option>
                                    <option>Africa</option>
                                    <option>Oceania</option>
                                    <option>Asia</option>
                                </select>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="country"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >Country</label
                                >
                                <select
                                    v-model="locationCountry"
                                    id="country"
                                    class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                >
                                    <option value="Afghanistan"
                                        >Afghanistan</option
                                    >
                                    <option value="Åland Islands"
                                        >Åland Islands</option
                                    >
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa"
                                        >American Samoa</option
                                    >
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica"
                                        >Antarctica</option
                                    >
                                    <option value="Antigua and Barbuda"
                                        >Antigua and Barbuda</option
                                    >
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan"
                                        >Azerbaijan</option
                                    >
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh"
                                        >Bangladesh</option
                                    >
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina"
                                        >Bosnia and Herzegovina</option
                                    >
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island"
                                        >Bouvet Island</option
                                    >
                                    <option value="Brazil">Brazil</option>
                                    <option
                                        value="British Indian Ocean Territory"
                                        >British Indian Ocean Territory</option
                                    >
                                    <option value="Brunei Darussalam"
                                        >Brunei Darussalam</option
                                    >
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso"
                                        >Burkina Faso</option
                                    >
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde"
                                        >Cape Verde</option
                                    >
                                    <option value="Cayman Islands"
                                        >Cayman Islands</option
                                    >
                                    <option value="Central African Republic"
                                        >Central African Republic</option
                                    >
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island"
                                        >Christmas Island</option
                                    >
                                    <option value="Cocos (Keeling) Islands"
                                        >Cocos (Keeling) Islands</option
                                    >
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option
                                        value="Congo, The Democratic Republic of The"
                                        >Congo, The Democratic Republic of
                                        The</option
                                    >
                                    <option value="Cook Islands"
                                        >Cook Islands</option
                                    >
                                    <option value="Costa Rica"
                                        >Costa Rica</option
                                    >
                                    <option value="Cote D'ivoire"
                                        >Cote D'ivoire</option
                                    >
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic"
                                        >Czech Republic</option
                                    >
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic"
                                        >Dominican Republic</option
                                    >
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador"
                                        >El Salvador</option
                                    >
                                    <option value="Equatorial Guinea"
                                        >Equatorial Guinea</option
                                    >
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands (Malvinas)"
                                        >Falkland Islands (Malvinas)</option
                                    >
                                    <option value="Faroe Islands"
                                        >Faroe Islands</option
                                    >
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana"
                                        >French Guiana</option
                                    >
                                    <option value="French Polynesia"
                                        >French Polynesia</option
                                    >
                                    <option value="French Southern Territories"
                                        >French Southern Territories</option
                                    >
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe"
                                        >Guadeloupe</option
                                    >
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guernsey">Guernsey</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-bissau"
                                        >Guinea-bissau</option
                                    >
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option
                                        value="Heard Island and Mcdonald Islands"
                                        >Heard Island and Mcdonald
                                        Islands</option
                                    >
                                    <option
                                        value="Holy See (Vatican City State)"
                                        >Holy See (Vatican City State)</option
                                    >
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran, Islamic Republic of"
                                        >Iran, Islamic Republic of</option
                                    >
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man"
                                        >Isle of Man</option
                                    >
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan"
                                        >Kazakhstan</option
                                    >
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option
                                        value="Korea, Democratic People's Republic of"
                                        >Korea, Democratic People's Republic
                                        of</option
                                    >
                                    <option value="Korea, Republic of"
                                        >Korea, Republic of</option
                                    >
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan"
                                        >Kyrgyzstan</option
                                    >
                                    <option
                                        value="Lao People's Democratic Republic"
                                        >Lao People's Democratic
                                        Republic</option
                                    >
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libyan Arab Jamahiriya"
                                        >Libyan Arab Jamahiriya</option
                                    >
                                    <option value="Liechtenstein"
                                        >Liechtenstein</option
                                    >
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg"
                                        >Luxembourg</option
                                    >
                                    <option value="Macao">Macao</option>
                                    <option
                                        value="Macedonia, The Former Yugoslav Republic of"
                                        >Macedonia, The Former Yugoslav Republic
                                        of</option
                                    >
                                    <option value="Madagascar"
                                        >Madagascar</option
                                    >
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands"
                                        >Marshall Islands</option
                                    >
                                    <option value="Martinique"
                                        >Martinique</option
                                    >
                                    <option value="Mauritania"
                                        >Mauritania</option
                                    >
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option
                                        value="Micronesia, Federated States of"
                                        >Micronesia, Federated States of</option
                                    >
                                    <option value="Moldova, Republic of"
                                        >Moldova, Republic of</option
                                    >
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro"
                                        >Montenegro</option
                                    >
                                    <option value="Montserrat"
                                        >Montserrat</option
                                    >
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique"
                                        >Mozambique</option
                                    >
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands"
                                        >Netherlands</option
                                    >
                                    <option value="Netherlands Antilles"
                                        >Netherlands Antilles</option
                                    >
                                    <option value="New Caledonia"
                                        >New Caledonia</option
                                    >
                                    <option value="New Zealand"
                                        >New Zealand</option
                                    >
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island"
                                        >Norfolk Island</option
                                    >
                                    <option value="Northern Mariana Islands"
                                        >Northern Mariana Islands</option
                                    >
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option
                                        value="Palestinian Territory, Occupied"
                                        >Palestinian Territory, Occupied</option
                                    >
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea"
                                        >Papua New Guinea</option
                                    >
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines"
                                        >Philippines</option
                                    >
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico"
                                        >Puerto Rico</option
                                    >
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russian Federation"
                                        >Russian Federation</option
                                    >
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Helena"
                                        >Saint Helena</option
                                    >
                                    <option value="Saint Kitts and Nevis"
                                        >Saint Kitts and Nevis</option
                                    >
                                    <option value="Saint Lucia"
                                        >Saint Lucia</option
                                    >
                                    <option value="Saint Pierre and Miquelon"
                                        >Saint Pierre and Miquelon</option
                                    >
                                    <option
                                        value="Saint Vincent and The Grenadines"
                                        >Saint Vincent and The
                                        Grenadines</option
                                    >
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino"
                                        >San Marino</option
                                    >
                                    <option value="Sao Tome and Principe"
                                        >Sao Tome and Principe</option
                                    >
                                    <option value="Saudi Arabia"
                                        >Saudi Arabia</option
                                    >
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles"
                                        >Seychelles</option
                                    >
                                    <option value="Sierra Leone"
                                        >Sierra Leone</option
                                    >
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands"
                                        >Solomon Islands</option
                                    >
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa"
                                        >South Africa</option
                                    >
                                    <option
                                        value="South Georgia and The South Sandwich Islands"
                                        >South Georgia and The South Sandwich
                                        Islands</option
                                    >
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard and Jan Mayen"
                                        >Svalbard and Jan Mayen</option
                                    >
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland"
                                        >Switzerland</option
                                    >
                                    <option value="Syrian Arab Republic"
                                        >Syrian Arab Republic</option
                                    >
                                    <option value="Taiwan, Province of China"
                                        >Taiwan, Province of China</option
                                    >
                                    <option value="Tajikistan"
                                        >Tajikistan</option
                                    >
                                    <option value="Tanzania, United Republic of"
                                        >Tanzania, United Republic of</option
                                    >
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-leste"
                                        >Timor-leste</option
                                    >
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago"
                                        >Trinidad and Tobago</option
                                    >
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan"
                                        >Turkmenistan</option
                                    >
                                    <option value="Turks and Caicos Islands"
                                        >Turks and Caicos Islands</option
                                    >
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates"
                                        >United Arab Emirates</option
                                    >
                                    <option value="United Kingdom"
                                        >United Kingdom</option
                                    >
                                    <option value="United States"
                                        >United States</option
                                    >
                                    <option
                                        value="United States Minor Outlying Islands"
                                        >United States Minor Outlying
                                        Islands</option
                                    >
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan"
                                        >Uzbekistan</option
                                    >
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Viet Nam">Viet Nam</option>
                                    <option value="Virgin Islands, British"
                                        >Virgin Islands, British</option
                                    >
                                    <option value="Virgin Islands, U.S."
                                        >Virgin Islands, U.S.</option
                                    >
                                    <option value="Wallis and Futuna"
                                        >Wallis and Futuna</option
                                    >
                                    <option value="Western Sahara"
                                        >Western Sahara</option
                                    >
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="city"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >City</label
                                >
                                <div class="relative mt-1 rounded-md shadow-sm">
                                    <input
                                        v-model="locationCity"
                                        id="city"
                                        class="block w-full form-input sm:text-sm sm:leading-5"
                                        placeholder="New York"
                                    />
                                </div>
                            </div>

                            <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 mt-6 md:col-span-2">
                                    <label
                                        for="date"
                                        class="block text-sm font-medium leading-5 text-gray-700"
                                        >Date Founded</label
                                    >
                                    <div
                                        class="relative mt-1 rounded-md shadow-sm"
                                    >
                                        <input
                                            v-model="dateFounded"
                                            type="date"
                                            id="date"
                                            class="block w-full form-input sm:text-sm sm:leading-5"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6">
                                <label
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Logo
                                </label>
                                <div class="flex items-center mt-2">
                                    <span
                                        class="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full"
                                    >
                                        <img
                                            v-if="activeUserInfo.imageLogo"
                                            :src="activeUserInfo.imageLogo"
                                            :alt="activeUserInfo.name"
                                        />
                                        <svg
                                            v-else
                                            class="w-full h-full text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span class="ml-5 rounded-md shadow-sm">
                                        <input
                                            type="file"
                                            ref="logoInput"
                                            class="hidden"
                                            accept="image/jpeg, image/png"
                                            name="photo"
                                            @change="detectLogoFile($event)"
                                        />
                                        <button
                                            type="button"
                                            @click="selectLogo"
                                            class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                                        >
                                            Change Logo
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div class="mt-6">
                                <label
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Cover photo
                                </label>
                                <input
                                    type="file"
                                    ref="headerInput"
                                    class="hidden "
                                    accept="image/jpeg, image/png"
                                    name="photo"
                                    @change="detectHeaderFile($event)"
                                />
                                <div v-if="activeUserInfo.imageHeader">
                                    <img
                                        :src="activeUserInfo.imageHeader"
                                        :alt="activeUserInfo.programName"
                                        class="flex justify-center pt-2 pb-6 mt-2 rounded-md"
                                    />
                                    <button
                                        type="button"
                                        @click="selectHeader"
                                        class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                                    >
                                        Change Cover
                                    </button>
                                </div>
                                <div
                                    v-else
                                    class="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md"
                                >
                                    <div class="text-center">
                                        <svg
                                            class="w-12 h-12 mx-auto text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p class="mt-1 text-sm text-gray-600">
                                            <button
                                                @click.prevent="selectHeader"
                                                class="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
                                            >
                                                Upload a file
                                            </button>
                                        </p>
                                        <p class="mt-1 text-xs text-gray-500">
                                            PNG, JPG up to 5MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Personal Info -->
            <div class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">
                            Personal Information
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-500">
                            This information will not be shared with others.
                        </p>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="first_name"
                                        class="block text-sm font-medium leading-5 text-gray-700"
                                        >First name</label
                                    >
                                    <input
                                        v-model="firstName"
                                        id="first_name"
                                        class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="last_name"
                                        class="block text-sm font-medium leading-5 text-gray-700"
                                        >Last name</label
                                    >
                                    <input
                                        v-model="lastName"
                                        id="last_name"
                                        class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-4">
                                    <label
                                        for="email_address"
                                        class="block text-sm font-medium leading-5 text-gray-700"
                                        >Email address</label
                                    >
                                    <input
                                        v-model="email"
                                        id="email_address"
                                        class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Social Links -->
            <div class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">
                            Social Links
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-500">
                            Let people get in touch with you around the web.
                        </p>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <div>
                            <label
                                for="organization_website"
                                class="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Organization Website
                            </label>
                            <div class="flex mt-1 rounded-md shadow-sm">
                                <span
                                    class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm"
                                >
                                    https://
                                </span>
                                <input
                                    v-model="website"
                                    id="organization_website"
                                    class="flex-1 block w-full px-3 py-2 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                                    placeholder="animali.life"
                                />
                            </div>
                        </div>
                        <div class="mt-6">
                            <label
                                for="donations"
                                class="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Donations
                            </label>
                            <div class="flex mt-1 rounded-md shadow-sm">
                                <span
                                    class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm"
                                >
                                    https://
                                </span>
                                <input
                                    v-model="donations"
                                    id="donations"
                                    class="flex-1 block w-full px-3 py-2 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                                    placeholder="paypal.com/animali"
                                />
                            </div>
                        </div>
                        <div class="mt-6">
                            <label
                                for="twitter"
                                class="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Twitter
                            </label>
                            <div class="flex mt-1 rounded-md shadow-sm">
                                <span
                                    class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm"
                                >
                                    https://twitter.com/
                                </span>
                                <input
                                    v-model="twitter"
                                    id="twitter"
                                    class="flex-1 block w-full px-3 py-2 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                                    placeholder="animali"
                                />
                            </div>
                        </div>
                        <div class="mt-6">
                            <label
                                for="facebook"
                                class="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Facebook
                            </label>
                            <div class="flex mt-1 rounded-md shadow-sm">
                                <span
                                    class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm"
                                >
                                    https://facebook.com/
                                </span>
                                <input
                                    v-model="facebook"
                                    id="facebook"
                                    class="flex-1 block w-full px-3 py-2 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                                    placeholder="animali"
                                />
                            </div>
                        </div>
                        <div class="mt-6">
                            <label
                                for="instagram"
                                class="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Instagram
                            </label>
                            <div class="flex mt-1 rounded-md shadow-sm">
                                <span
                                    class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm"
                                >
                                    https://instagram.com/
                                </span>
                                <input
                                    v-model="instagram"
                                    id="instagram"
                                    class="flex-1 block w-full px-3 py-2 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                                    placeholder="animali"
                                />
                            </div>
                        </div>
                        <div class="mt-6">
                            <label
                                for="youtube"
                                class="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Youtube
                            </label>
                            <div class="flex mt-1 rounded-md shadow-sm">
                                <span
                                    class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm"
                                >
                                    https://youtube.com/
                                </span>
                                <input
                                    v-model="youtube"
                                    id="youtube"
                                    class="flex-1 block w-full px-3 py-2 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                                    placeholder="animali"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
                <span class="inline-flex rounded-md shadow-sm">
                    <button
                        :disabled="isLoading"
                        type="button"
                        @click="saveChanges"
                        :class="
                            `${
                                isLoading ? 'opacity-75 cursor-not-allowed' : ''
                            } inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-animali-700 hover:bg-primary focus:outline-none active:bg-secondary transition ease-in-out duration-150`
                        "
                    >
                        <svg
                            v-if="isLoading"
                            class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                            viewBox="0 0 24 24"
                        >
                            <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        Save Changes
                    </button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import slugify from 'slugify'

export default {
    data() {
        return {
            isLoading: false,

            isPublic: this.$store.state.user.isPublic,
            primarySpecies: this.$store.state.user.primarySpecies,
            programName: this.$store.state.user.programName,
            programEmail: this.$store.state.user.programEmail,
            description: this.$store.state.user.description,
            locationCity: this.$store.state.user.locationCity,
            locationCountry: this.$store.state.user.locationCountry,
            locationArea: this.$store.state.user.locationArea,
            dateFounded: this.$moment(
                this.$store.state.user.dateFounded
            ).format('YYYY-MM-DD'),

            firstName: this.$store.state.user.firstName,
            lastName: this.$store.state.user.lastName,
            email: this.$store.state.user.email,

            website: this.$store.state.user.linkWebsite,
            donations: this.$store.state.user.linkDonate,
            twitter: this.$store.state.user.linkTwitter,
            facebook: this.$store.state.user.linkFacebook,
            instagram: this.$store.state.user.linkInstagram,
            youtube: this.$store.state.user.linkYoutube
        }
    },

    computed: {
        activeUserInfo() {
            return this.$store.state.user
        }
    },

    methods: {
        selectLogo() {
            this.$refs.logoInput.click()
        },

        selectHeader() {
            this.$refs.headerInput.click()
        },

        detectLogoFile(e) {
            const fileList = e.target.files || e.dataTransfer.files
            Array.from(Array(fileList.length).keys()).map(x => {
                this.uploadLogo(fileList[x])
            })
        },

        detectHeaderFile(e) {
            const fileList = e.target.files || e.dataTransfer.files
            Array.from(Array(fileList.length).keys()).map(x => {
                this.uploadHeader(fileList[x])
            })
        },

        uploadLogo(file) {
            const programId = this.activeUserInfo.programId

            const payload = {
                programId,
                file,
                isReloadRequired: true
            }

            this.$store.dispatch('updateLogo', payload).catch(err => {
                console.log(err)
            })
        },

        uploadHeader(file) {
            const programId = this.activeUserInfo.programId

            const payload = {
                programId,
                file,
                isReloadRequired: true
            }

            this.$store.dispatch('updateHeader', payload).catch(err => {
                console.log(err)
            })
        },

        async saveChanges() {
            this.isLoading = true

            // Slugify the program name
            const slug = await slugify(this.programName, {
                replacement: '-',
                // eslint-disable-next-line no-useless-escape
                remove: /[$*_+~.()'"!\=:@]/g,
                lower: true
            })

            var dateFoundedTimestamp = this.$fireStoreObj.Timestamp.fromDate(
                new Date(this.dateFounded)
            )

            const payload = {
                programId: this.activeUserInfo.programId,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,

                isPublic: this.isPublic,
                primarySpecies: this.primarySpecies,
                programSlug: slug,
                programName: this.programName,
                description: this.description,
                programEmail: this.programEmail,
                locationCity: this.locationCity,
                locationCountry: this.locationCountry,
                locationArea: this.locationArea,
                dateFounded: dateFoundedTimestamp,

                linkWebsite: this.website,
                linkDonate: this.donations,
                linkTwitter: this.twitter,
                linkFacebook: this.facebook,
                linkInstagram: this.instagram,
                linkYoutube: this.youtube,
                isReloadRequired: true
            }

            this.$store
                .dispatch('updateUser', payload)
                .then(() => {
                    console.log('successfully updated')
                })
                .catch(err => {
                    // notify error
                    console.log(err)
                    this.isLoading = false
                })
        }
    },

    created() {}
}
</script>
