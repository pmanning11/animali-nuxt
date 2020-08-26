<template>
    <div class="min-h-screen bg-white flex">
        <Notification
            class="z-50"
            v-show="showNotification"
            :title="notificationTitle"
            :body="notificationBody"
            :status="notificationStatus"
        />
        <div
            class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24"
        >
            <div class="mx-auto w-full max-w-md">
                <div>
                    <Logo class="h-12 w-auto" alt="Animali" />

                    <nav class="flex md:hidden items-center pt-8 space-x-8">
                        <p class="text-sm leading-5 font-medium">
                            Step {{ currentStep }} of 3
                        </p>
                        <ul class="flex items-center space-x-5">
                            <li>
                                <div
                                    class="relative flex items-center justify-center"
                                >
                                    <span class="absolute w-5 h-5 p-px flex">
                                        <span
                                            v-if="currentStep === 1"
                                            class="w-full h-full rounded-full bg-teal-100"
                                        ></span>
                                    </span>
                                    <span
                                        class="relative block w-2.5 h-2.5 bg-primary rounded-full"
                                    ></span>
                                </div>
                            </li>

                            <li>
                                <div
                                    class="relative flex items-center justify-center"
                                >
                                    <span class="absolute w-5 h-5 p-px flex">
                                        <span
                                            v-if="currentStep === 2"
                                            class="w-full h-full rounded-full bg-teal-100"
                                        ></span>
                                    </span>
                                    <span
                                        :class="
                                            currentStep >= 2
                                                ? 'bg-primary'
                                                : 'bg-gray-200'
                                        "
                                        class="relative block w-2.5 h-2.5 rounded-full"
                                    ></span>
                                </div>
                            </li>

                            <li>
                                <div
                                    class="relative flex items-center justify-center"
                                >
                                    <span class="absolute w-5 h-5 p-px flex">
                                        <span
                                            v-if="currentStep === 3"
                                            class="w-full h-full rounded-full bg-teal-100"
                                        ></span>
                                    </span>
                                    <span
                                        :class="
                                            currentStep >= 3
                                                ? 'bg-primary'
                                                : 'bg-gray-200'
                                        "
                                        class="relative block w-2.5 h-2.5 rounded-full"
                                    ></span>
                                </div>
                            </li>

                            <!-- <li>
                                <div
                                    class="relative flex items-center justify-center"
                                >
                                    <span class="absolute w-5 h-5 p-px flex">
                                        <span
                                            v-if="currentStep === 4"
                                            class="w-full h-full rounded-full bg-teal-100"
                                        ></span>
                                    </span>
                                    <span
                                        :class="
                                            currentStep === 4
                                                ? 'bg-primary'
                                                : 'bg-gray-200'
                                        "
                                        class="relative block w-2.5 h-2.5 rounded-full"
                                    ></span>
                                </div>
                            </li> -->
                        </ul>
                    </nav>

                    <h2
                        class="mt-6 text-3xl leading-9 font-extrabold text-secondary"
                    >
                        Start your 30-day free trial
                    </h2>
                    <p class="mt-2 text-sm leading-5 text-gray-600 max-w">
                        Or
                        <NuxtLink
                            to="/login"
                            class="font-medium text-animali-600 hover:text-animali-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                            >sign in to your existing account</NuxtLink
                        >
                    </p>
                </div>

                <div class="mt-8">
                    <div v-if="currentStep === 1" class="mt-6">
                        <ValidationObserver
                            v-if="currentStep === 1"
                            v-slot="{ invalid }"
                        >
                            <div>
                                <label
                                    for="email"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >Company Email</label
                                >
                                <div class="mt-1 rounded-md">
                                    <ValidationProvider
                                        mode="eager"
                                        name="Email"
                                        rules="required|email"
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            v-model="email"
                                            id="email"
                                            type="email"
                                            required
                                            class="appearance-none shadow-sm block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        />
                                        <span class="text-red-500">{{
                                            errors[0]
                                        }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="password"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >Password</label
                                >
                                <div class="mt-1 rounded-md">
                                    <ValidationProvider
                                        mode="eager"
                                        name="Password"
                                        rules="required|min:6"
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            v-model="password"
                                            id="password"
                                            type="password"
                                            required
                                            class="appearance-none shadow-sm block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        />
                                        <span class="text-red-500">{{
                                            errors[0]
                                        }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="programName"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >Program Name</label
                                >
                                <div class="mt-1 rounded-md">
                                    <ValidationProvider
                                        name="Program Name"
                                        rules="required|alpha_spaces"
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            v-model="programName"
                                            id="programName"
                                            required
                                            class="appearance-none shadow-sm block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        />
                                        <span class="text-red-500">{{
                                            errors[0]
                                        }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>

                            <div class="mt-6">
                                <span class="block w-full rounded-md shadow-sm">
                                    <button
                                        :disabled="invalid"
                                        :class="
                                            invalid
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-animali-700 hover:bg-primary active:bg-secondary'
                                        "
                                        class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                        @click.prevent="nextStep(1)"
                                    >
                                        Next
                                    </button>
                                </span>
                            </div>
                        </ValidationObserver>
                    </div>

                    <div v-else-if="currentStep === 2" class="mt-6">
                        <ValidationObserver
                            v-if="currentStep === 2"
                            v-slot="{ invalid }"
                        >
                            <div>
                                <label
                                    for="email"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >Personal email address</label
                                >
                                <div class="mt-1 rounded-md">
                                    <ValidationProvider
                                        mode="eager"
                                        name="Personal Email"
                                        rules="required|email"
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            v-model="personalEmail"
                                            id="personalEmail"
                                            type="email"
                                            required
                                            class="appearance-none shadow-sm block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        />
                                        <span class="text-red-500">{{
                                            errors[0]
                                        }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>

                            <div
                                class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6"
                            >
                                <div class="sm:col-span-3">
                                    <label
                                        for="firstName"
                                        class="block text-sm font-medium leading-5 text-gray-700"
                                        >First Name</label
                                    >
                                    <div class="mt-1 rounded-md">
                                        <ValidationProvider
                                            mode="eager"
                                            name="First Name"
                                            rules="required|alpha"
                                            v-slot="{ errors }"
                                        >
                                            <input
                                                v-model="firstName"
                                                id="firstName"
                                                required
                                                class="appearance-none shadow-sm block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                            />
                                            <span class="text-red-500">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label
                                        for="lastName"
                                        class="block text-sm font-medium leading-5 text-gray-700"
                                        >Last Name</label
                                    >
                                    <div class="mt-1 rounded-md">
                                        <ValidationProvider
                                            name="Last Name"
                                            rules="required|alpha"
                                            v-slot="{ errors }"
                                        >
                                            <input
                                                v-model="lastName"
                                                id="lastName"
                                                required
                                                class="appearance-none shadow-sm block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                            />
                                            <span class="text-red-500">{{
                                                errors[0]
                                            }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6">
                                <span class="block w-full rounded-md shadow-sm">
                                    <button
                                        :disabled="invalid"
                                        :class="
                                            invalid
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-animali-700 hover:bg-primary active:bg-secondary'
                                        "
                                        class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                        @click.prevent="nextStep(2)"
                                    >
                                        Next
                                    </button>
                                </span>
                            </div>
                        </ValidationObserver>
                    </div>

                    <div v-else-if="currentStep === 3" class="mt-6">
                        <ValidationObserver
                            v-if="currentStep === 3"
                            v-slot="{ invalid }"
                        >
                            <div class="mt-6">
                                <label
                                    for="primary_species"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >Primary Species</label
                                >
                                <select
                                    v-model="primarySpecies"
                                    id="primary_species"
                                    class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                                    class="block text-sm leading-5 font-medium text-gray-700"
                                >
                                    Program Description
                                </label>
                                <div class="rounded-md">
                                    <textarea
                                        v-model="description"
                                        id="description"
                                        rows="3"
                                        class="form-textarea shadow-sm mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        placeholder="Brief description for your organization. Try to fit it into a tweet ;)"
                                    ></textarea>
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
                                    class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                                    class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        v-model="locationCity"
                                        id="city"
                                        class="form-input block w-full sm:text-sm sm:leading-5"
                                        placeholder="New York"
                                    />
                                </div>
                            </div>

                            <div class="mt-6">
                                <label
                                    for="date"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                    >Date Founded</label
                                >
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        v-model="dateFounded"
                                        type="date"
                                        id="date"
                                        class="form-input block w-full sm:text-sm sm:leading-5"
                                    />
                                </div>
                            </div>

                            <div class="mt-6 flex items-center justify-between">
                                <div class="flex items-center">
                                    <ValidationProvider
                                        name="Terms"
                                        :rules="{
                                            required: { allowFalse: false }
                                        }"
                                        v-slot="{ errors }"
                                        class="flex items-start"
                                    >
                                        <input
                                            v-model="terms"
                                            id="terms"
                                            type="checkbox"
                                            class="form-checkbox h-4 w-4 text-primary transition duration-150 ease-in-out"
                                        />

                                        <div
                                            class="flex flex-col justify-start"
                                        >
                                            <label
                                                for="terms"
                                                class="ml-2 block text-sm leading-5 text-gray-900"
                                            >
                                                By signing up, you agree to our
                                                <a
                                                    href="https://animali.life/terms"
                                                    target="_blank"
                                                    class="text-animali-700 hover:text-primary"
                                                    >Terms of Service</a
                                                >
                                            </label>
                                            <span class="text-red-500">{{
                                                errors[0]
                                            }}</span>
                                        </div>
                                    </ValidationProvider>
                                </div>
                            </div>

                            <div class="mt-6">
                                <span class="block w-full rounded-md shadow-sm">
                                    <button
                                        :disabled="isLoading || invalid"
                                        type="submit"
                                        :class="
                                            `${
                                                isLoading
                                                    ? 'opacity-75 cursor-not-allowed'
                                                    : ''
                                            } ${
                                                invalid
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : 'bg-animali-700 hover:bg-primary active:bg-secondary'
                                            } w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out`
                                        "
                                        @click.prevent="createAccount"
                                    >
                                        <svg
                                            v-if="isLoading"
                                            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                class="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Create Account
                                    </button>
                                </span>
                            </div>
                        </ValidationObserver>
                    </div>

                    <!-- <div v-else-if="currentStep === 4" class="mt-6">
                        <ValidationObserver v-slot="{ invalid }">
                            <div class="mt-6">
                                <select
                                    v-model="paymentPlan"
                                    aria-label="Payment Schedule"
                                    class="form-select block w-full"
                                >
                                    <option>Annual</option>
                                    <option>Monthly</option>
                                </select>
                            </div>
                            <div class="mt-6">
                                <div
                                    class="flex rounded-md shadow-sm hover:shadow-md bg-gray-100"
                                    :class="
                                        selectedPlan === 'Pack'
                                            ? 'bg-teal-100 shadow-outline-teal focus:shadow-outline-teal hover:shadow-outline-teal'
                                            : ''
                                    "
                                    @click="selectedPlan = 'Pack'"
                                >
                                    <img
                                        class="w-32 h-32 object-cover rounded-l-md"
                                        src="https://animali.life/assets/static/pricing-pack.d042d20.2eb8696ac3d69336a7421b7525efd625.jpg"
                                        alt="pack of lions"
                                    />
                                    <div
                                        class="flex justify-between w-full py-4 px-4"
                                    >
                                        <div class="flex flex-col">
                                            <div class="text-2xl font-light">
                                                Pack
                                            </div>
                                            <div class="text-sm text-gray-400">
                                                Solo conservationist or small
                                                team
                                            </div>
                                            <div
                                                class="flex font-semibold text-sm mt-auto"
                                            >
                                                <div class="pr-2">
                                                    100 animals
                                                </div>
                                                <div>1000 encounters</div>
                                            </div>
                                        </div>
                                        <div
                                            class="text-xl font-medium text-primary"
                                        >
                                            ${{
                                                paymentPlan === 'Annual'
                                                    ? '29'
                                                    : '49'
                                            }}/m
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="flex rounded-md shadow-sm hover:shadow-md mt-6 bg-gray-100"
                                    :class="
                                        selectedPlan === 'Pod'
                                            ? 'bg-teal-100 shadow-outline-teal focus:shadow-outline-teal hover:shadow-outline-teal'
                                            : ''
                                    "
                                    @click="selectedPlan = 'Pod'"
                                >
                                    <img
                                        class="w-32 h-32 object-cover rounded-l-md"
                                        src="https://animali.life/assets/static/pricing-pod.d042d20.58d86f2d56e0f0afe3d0528c01b0be8b.jpg"
                                        alt="pod of dolphins"
                                    />
                                    <div
                                        class="flex justify-between w-full px-4 py-4"
                                    >
                                        <div class="flex flex-col">
                                            <div class="text-2xl font-light">
                                                Pod
                                            </div>
                                            <div class="text-sm text-gray-400">
                                                For a growing program and team
                                            </div>
                                            <div
                                                class="flex font-semibold text-sm mt-auto"
                                            >
                                                <div class="pr-2">
                                                    500 animals
                                                </div>
                                                <div>5000 encounters</div>
                                            </div>
                                        </div>
                                        <div
                                            class="text-xl font-medium pb-5 text-primary"
                                        >
                                            ${{
                                                paymentPlan === 'Annual'
                                                    ? '99'
                                                    : '199'
                                            }}/m
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6 flex items-center justify-between">
                                <div class="flex items-center">
                                    <ValidationProvider
                                        name="Terms"
                                        rules="required: { allowFalse: false }"
                                        v-slot="{ errors }"
                                    >
                                        <input
                                            v-model="terms"
                                            id="terms"
                                            type="checkbox"
                                            class="form-checkbox h-4 w-4 text-primary transition duration-150 ease-in-out"
                                        />
                                        <span class="text-red-500">{{
                                            errors[0]
                                        }}</span>
                                    </ValidationProvider>
                                    <label
                                        for="terms"
                                        class="ml-2 block text-sm leading-5 text-gray-900"
                                    >
                                        By signing up, you agree to our
                                        <a
                                            href="https://animali.life/terms"
                                            target="_blank"
                                            class="text-animali-700 hover:text-primary"
                                            >Terms of Service</a
                                        >
                                    </label>
                                </div>
                            </div>

                            <div class="mt-6">
                                <span class="block w-full rounded-md shadow-sm">
                                    <button
                                        :disabled="isLoading || invalid"
                                        type="submit"
                                        :class="
                                            `${
                                                isLoading
                                                    ? 'opacity-75 cursor-not-allowed'
                                                    : ''
                                            } ${
                                                invalid
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : 'bg-animali-700 hover:bg-primary active:bg-secondary'
                                            } w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out`
                                        "
                                        @click.prevent="createAccount"
                                    >
                                        <svg
                                            v-if="isLoading"
                                            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                class="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Register
                                    </button>
                                </span>
                            </div>
                        </ValidationObserver>
                    </div> -->
                </div>
            </div>
        </div>
        <div
            class="hidden md:flex flex-col justify-center bg-secondary text-white sm:px-6 lg:flex-none lg:px-20 xl:px-24"
        >
            <nav class="w-full mx-auto max-w-sm">
                <ul class="overflow-hidden">
                    <li class="relative pb-10">
                        <div
                            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-primary"
                        ></div>
                        <a
                            href="#"
                            class="relative flex items-start space-x-4 group focus:outline-none"
                        >
                            <div class="h-9 flex items-center">
                                <span
                                    :class="
                                        step1Complete
                                            ? 'bg-primary'
                                            : 'bg-white border-2 border-primary'
                                    "
                                    class="relative z-10 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-teal-800 group-focus:bg-teal-800 transition ease-in-out duration-150"
                                >
                                    <svg
                                        v-if="step1Complete"
                                        class="w-5 h-5 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span
                                        v-else
                                        class="h-2.5 w-2.5 rounded-full bg-primary"
                                    ></span>
                                </span>
                            </div>
                            <div class="min-w-0">
                                <h3
                                    :class="
                                        currentStep === 1 ? 'text-primary' : ''
                                    "
                                    class="text-xs leading-4 font-semibold uppercase tracking-wide"
                                >
                                    Create account
                                </h3>
                                <p class="text-sm leading-5 text-gray-200">
                                    Register an admin account.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li class="relative pb-10">
                        <div
                            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                        ></div>
                        <div
                            class="relative flex items-start space-x-4 group focus:outline-none"
                        >
                            <div class="h-9 flex items-center">
                                <span
                                    :class="
                                        step2Complete
                                            ? 'bg-primary'
                                            : 'bg-white border-2 border-gray-300'
                                    "
                                    class="relative z-10 w-8 h-8 flex items-center justify-center rounded-full"
                                >
                                    <svg
                                        v-if="step2Complete"
                                        class="w-5 h-5 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span
                                        v-else-if="currentStep === 2"
                                        class="h-2.5 w-2.5 rounded-full bg-primary"
                                    ></span>
                                </span>
                            </div>
                            <div class="min-w-0">
                                <h3
                                    :class="
                                        currentStep === 2 ? 'text-primary' : ''
                                    "
                                    class="text-xs leading-4 font-semibold uppercase tracking-wide"
                                >
                                    Personal information
                                </h3>
                                <p class="text-sm leading-5 text-gray-200">
                                    Your info is not shared publicly.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li class="relative">
                        <div
                            class="-ml-px absolute mt-0.5 top-2 left-4 w-0.5 h-1/2 bg-gray-300"
                        ></div>
                        <a
                            href="#"
                            class="relative flex items-start space-x-4 group focus:outline-none"
                        >
                            <div class="h-9 flex items-center">
                                <span
                                    :class="
                                        step3Complete
                                            ? 'bg-primary'
                                            : 'bg-white border-2 border-gray-300'
                                    "
                                    class="relative z-10 w-8 h-8 flex items-center justify-center rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150"
                                >
                                    <svg
                                        v-if="step3Complete"
                                        class="w-5 h-5 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <span
                                        v-else-if="currentStep === 3"
                                        class="h-2.5 w-2.5 rounded-full bg-primary"
                                    ></span>
                                </span>
                            </div>
                            <div class="min-w-0">
                                <h3
                                    :class="
                                        currentStep === 3 ? 'text-primary' : ''
                                    "
                                    class="text-xs leading-4 font-semibold uppercase tracking-wide"
                                >
                                    Program information
                                </h3>
                                <p class="text-sm leading-5 text-gray-200">
                                    Set up your program profile.
                                </p>
                            </div>
                        </a>
                    </li>

                    <!-- <li class="relative">
                        <div
                            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                        ></div>
                        <a
                            href="#"
                            class="relative flex items-start space-x-4 group focus:outline-none"
                        >
                            <div class="h-9 flex items-center">
                                <span
                                    class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 group-focus:border-gray-400 transition ease-in-out duration-150"
                                >
                                    <span
                                        v-if="currentStep === 4"
                                        class="h-2.5 w-2.5 rounded-full bg-primary"
                                    ></span>
                                </span>
                            </div>
                            <div class="min-w-0">
                                <h3
                                    :class="
                                        currentStep === 4 ? 'text-primary' : ''
                                    "
                                    class="text-xs leading-4 font-semibold uppercase tracking-wide"
                                >
                                    Choose a Plan
                                </h3>
                                <p class="text-sm leading-5 text-gray-200">
                                    Select a customized plan for your needs.
                                </p>
                            </div>
                        </a>
                    </li> -->
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import Logo from '../components/Logo'
import Notification from '../components/Notification'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import {
    required,
    email,
    min,
    alpha,
    alpha_spaces
} from 'vee-validate/dist/rules'
import slugify from 'slugify'

extend('email', email)

extend('required', {
    ...required,
    message: 'This field is required'
})

extend('min', {
    ...min,
    message: 'Password must be at least 6 characters'
})

extend('alpha', {
    ...alpha,
    message: 'Letters only'
})

extend('alpha_spaces', {
    ...alpha_spaces,
    message: 'Letters and spaces only'
})

export default {
    layout: 'blank',

    components: {
        Logo,
        Notification,
        ValidationProvider,
        ValidationObserver
    },

    data() {
        return {
            isLoading: false,
            showNotification: false,

            notificationTitle: '',
            notificationBody: '',
            notificationStatus: '',

            currentStep: 1,
            step1Complete: false,
            step2Complete: false,
            step3Complete: false,

            email: '',
            personalEmail: '',
            password: '',
            firstName: '',
            lastName: '',
            programName: '',
            primarySpecies: '',
            description: '',
            locationArea: '',
            locationCountry: '',
            locationCity: '',
            dateFounded: '',
            paymentPlan: 'Annual',
            selectedPlan: 'Pack',
            terms: false
        }
    },

    methods: {
        nextStep(fromStep) {
            this.currentStep += 1

            if (fromStep === 1) {
                this.step1Complete = true
            } else if (fromStep === 2) {
                this.step2Complete = true
            } else if (fromStep === 3) {
                this.step3Complete = true
            }
        },

        async createAccount() {
            this.isLoading = true

            // Slugify the program name
            const slug = await slugify(this.programName, {
                replacement: '-',
                // eslint-disable-next-line no-useless-escape
                remove: /[$*_+~.()'"!\=:@]/g,
                lower: true
            })

            const dateFoundedTimestamp = this.$fireStoreObj.Timestamp.fromDate(
                new Date(this.dateFounded)
            )

            try {
                console.log('began account creation function')
                await this.$store
                    .dispatch('register', {
                        email: this.email,
                        personalEmail: this.personalEmail,
                        password: this.password,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        programName: this.programName,
                        primarySpecies: this.primarySpecies,
                        description: this.description,
                        locationArea: this.locationArea,
                        locationCountry: this.locationCountry,
                        locationCity: this.locationCity,
                        dateFounded: dateFoundedTimestamp,
                        paymentPlan: this.paymentPlan,
                        selectedPlan: this.selectedPlan,
                        terms: this.terms,
                        slug
                    })
                    .catch(err => {
                        this.isLoading = false
                        console.log('mofuckin erra gah ', err)
                    })
            } catch (error) {
                this.isLoading = false
                console.log('error logging in from register.vue: ', error)
            }
        },

        presentNotification(e) {
            console.log('present notification called')

            this.showPasswordResetModal = false
            this.showNotification = true
            this.notificationTitle = e.title
            this.notificationBody = e.body
            this.notificationStatus = e.status
            // Delay 1 second then hide notification
            setTimeout(() => {
                this.showNotification = false
            }, 5000)
        }
    }
}
</script>

<style>
.login-tabs-container {
    min-height: 505px;
}
.con-tab {
    padding-bottom: 14px;
}

.con-slot-tabs {
    margin-top: 1rem;
}

.gradient-bg {
    background: linear-gradient(105deg, #3cdfd9 1.79%, #1b4ea2 100%);
}
</style>
