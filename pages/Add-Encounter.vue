<template>
    <div class="pb-6">
        <!-- Steps  -->
        <nav>
            <ul
                class="border border-gray-300 bg-cool-gray-100 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0"
            >
                <!-- STEP 1 -->
                <li class="relative md:flex-1 md:flex">
                    <a href="#" class="group flex items-center w-full">
                        <div
                            class="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4"
                        >
                            <div
                                :class="
                                    `${
                                        currentStep === 1
                                            ? 'border-animali-700'
                                            : 'border-gray-300'
                                    } ${
                                        step1Complete === true
                                            ? 'bg-animali-700'
                                            : ''
                                    } flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full`
                                "
                            >
                                <svg
                                    v-if="step1Complete === true"
                                    class="w-6 h-6 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <p
                                    v-else
                                    :class="
                                        currentStep === 1
                                            ? 'text-animali-700'
                                            : 'text-gray-500'
                                    "
                                >
                                    01
                                </p>
                            </div>
                            <p
                                class="text-sm leading-5 font-medium"
                                :class="
                                    currentStep === 1
                                        ? 'text-animali-700'
                                        : 'text-gray-500'
                                "
                            >
                                Species
                            </p>
                        </div>
                    </a>

                    <div
                        class="hidden md:block absolute top-0 right-0 h-full w-5"
                    >
                        <svg
                            class="h-full w-full text-gray-300"
                            viewBox="0 0 22 80"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 -2L20 40L0 82"
                                vector-effect="non-scaling-stroke"
                                stroke="currentcolor"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </li>

                <!-- STEP 2 -->
                <li class="relative md:flex-1 md:flex">
                    <div
                        class="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4"
                    >
                        <div
                            :class="
                                `${
                                    currentStep === 2
                                        ? 'border-animali-700'
                                        : 'border-gray-300'
                                } ${
                                    step2Complete === true
                                        ? 'bg-animali-700'
                                        : ''
                                } flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full`
                            "
                        >
                            <svg
                                v-if="step2Complete === true"
                                class="w-6 h-6 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>

                            <p
                                v-else
                                :class="
                                    currentStep === 2
                                        ? 'text-animali-700'
                                        : 'text-gray-500'
                                "
                            >
                                02
                            </p>
                        </div>
                        <p
                            class="text-sm leading-5 font-medium"
                            :class="
                                currentStep === 2
                                    ? 'text-animali-700'
                                    : 'text-gray-500'
                            "
                        >
                            Photo
                        </p>
                    </div>

                    <div
                        class="hidden md:block absolute top-0 right-0 h-full w-5"
                    >
                        <svg
                            class="h-full w-full text-gray-300"
                            viewBox="0 0 22 80"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 -2L20 40L0 82"
                                vector-effect="non-scaling-stroke"
                                stroke="currentcolor"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </li>

                <!-- STEP 3 -->
                <li class="relative md:flex-1 md:flex">
                    <div
                        class="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4"
                    >
                        <div
                            :class="
                                `${
                                    currentStep === 3
                                        ? 'border-animali-700'
                                        : 'border-gray-300'
                                } ${
                                    step3Complete === true
                                        ? 'bg-animali-700'
                                        : ''
                                } flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full`
                            "
                        >
                            <svg
                                v-if="step3Complete === true"
                                class="w-6 h-6 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <p
                                v-else
                                :class="
                                    currentStep === 3
                                        ? 'text-animali-700'
                                        : 'text-gray-500'
                                "
                            >
                                03
                            </p>
                        </div>
                        <p
                            class="text-sm leading-5 font-medium"
                            :class="
                                currentStep === 3
                                    ? 'text-animali-700'
                                    : 'text-gray-500'
                            "
                        >
                            Date & Location
                        </p>
                    </div>

                    <div
                        class="hidden md:block absolute top-0 right-0 h-full w-5"
                    >
                        <svg
                            class="h-full w-full text-gray-300"
                            viewBox="0 0 22 80"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 -2L20 40L0 82"
                                vector-effect="non-scaling-stroke"
                                stroke="currentcolor"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </li>

                <!-- STEP 4 -->
                <li class="relative md:flex-1 md:flex">
                    <a href="#" class="group flex items-center">
                        <div
                            class="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4"
                        >
                            <div
                                :class="
                                    `${
                                        currentStep === 4
                                            ? 'border-animali-700'
                                            : 'border-gray-300'
                                    } ${
                                        step4Complete === true
                                            ? 'bg-animali-700'
                                            : ''
                                    } flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full`
                                "
                            >
                                <svg
                                    v-if="step4Complete === true"
                                    class="w-6 h-6 text-white"
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
                                    :class="
                                        currentStep === 4
                                            ? 'text-animali-700'
                                            : 'text-gray-500'
                                    "
                                    >04</span
                                >
                            </div>
                            <p
                                class="text-sm leading-5 font-medium"
                                :class="
                                    currentStep === 4
                                        ? 'text-animali-700'
                                        : 'text-gray-500'
                                "
                            >
                                Compare
                            </p>
                        </div>
                    </a>
                    <div
                        class="hidden md:block absolute top-0 right-0 h-full w-5"
                    >
                        <svg
                            class="h-full w-full text-gray-300"
                            viewBox="0 0 22 80"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 -2L20 40L0 82"
                                vector-effect="non-scaling-stroke"
                                stroke="currentcolor"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </li>

                <!-- STEP 5 -->
                <li class="relative md:flex-1 md:flex">
                    <a href="#" class="group flex items-center">
                        <div
                            class="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4"
                        >
                            <div
                                :class="
                                    `${
                                        currentStep === 5
                                            ? 'border-animali-700'
                                            : 'border-gray-300'
                                    } ${
                                        step5Complete === true
                                            ? 'bg-animali-700'
                                            : ''
                                    } flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full`
                                "
                            >
                                <svg
                                    v-if="step5Complete === true"
                                    class="w-6 h-6 text-white"
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
                                    :class="
                                        currentStep === 5
                                            ? 'text-animali-700'
                                            : 'text-gray-500'
                                    "
                                    >05</span
                                >
                            </div>
                            <p
                                class="text-sm leading-5 font-medium"
                                :class="
                                    currentStep === 5
                                        ? 'text-animali-700'
                                        : 'text-gray-500'
                                "
                            >
                                Submit
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>

        <!-- CONTENT AREA -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div class="py-4 flex flex-col justify-center">
                <div v-if="currentStep === 1">
                    <div class="mt-6 mx-auto max-w-sm">
                        <label
                            for="primary_species"
                            class="block text-sm font-medium leading-5 text-gray-700"
                            >Select animal species</label
                        >
                        <select
                            v-model="primarySpecies"
                            id="primary_species"
                            class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        >
                            <option value="whaleShark">Whale Shark</option>
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

                    <div class="mt-6 mx-auto max-w-sm">
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
                </div>

                <div v-else-if="currentStep === 2">
                    <div class="mt-6 mx-auto max-w-lg">
                        <label
                            class="block text-sm leading-5 font-medium text-gray-700"
                        >
                            Upload a photo
                        </label>
                        <input
                            type="file"
                            ref="photoInput"
                            class="hidden"
                            accept="image/jpeg, image/png"
                            name="photo"
                            @change="detectPhotoFile($event)"
                        />
                        <div v-if="photo !== null">
                            <button
                                type="button"
                                @click="selectPhoto"
                                class="py-2 px-3 mt-4 mb-4 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                            >
                                Change Photo
                            </button>
                            <img
                                :src="photo"
                                alt="upload photo"
                                class="flex justify-center max-h-60 mx-auto rounded-md"
                            />
                        </div>
                        <div
                            v-else
                            class="mt-2 flex justify-center px-6 pt-20 pb-20 border-2 border-gray-300 border-dashed rounded-md"
                        >
                            <div class="text-center">
                                <svg
                                    class="mx-auto h-12 w-12 text-gray-400"
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
                                        @click="selectPhoto"
                                        class="font-medium text-teal-600 hover:text-teal-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                                    >
                                        {{ photo }}
                                        Upload a file
                                    </button>
                                </p>
                                <p class="mt-1 text-xs text-gray-500">
                                    PNG, JPG up to 5MB
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 flex justify-between mx-auto max-w-lg">
                        <span class="block w-2/5 rounded-md shadow-sm">
                            <button
                                :disabled="invalid"
                                :class="
                                    invalid
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-animali-700 hover:bg-primary active:bg-secondary'
                                "
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                @click.prevent="prevStep(2)"
                            >
                                Prev
                            </button>
                        </span>
                        <span class="block w-2/5 rounded-md shadow-sm">
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
                </div>

                <div v-else-if="currentStep === 3">
                    <div class="mt-6 max-w-lg mx-auto">
                        <label
                            for="encountertime"
                            class="block text-sm font-medium leading-5 text-gray-700"
                            >Set Date and Location</label
                        >
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input
                                v-model="date"
                                type="datetime-local"
                                id="encountertime"
                                class="form-input block w-full sm:text-sm sm:leading-5"
                                name="birthdaytime"
                            />
                        </div>
                    </div>

                    <GmapMap
                        class="mt-4 max-w-lg max-h-80 mx-auto"
                        :center="this.mapCenter"
                        :zoom="2"
                        :options="this.mapOptions"
                        map-type-id="terrain"
                        @center_changed="this.updateCenter"
                        @idle="this.syncMap"
                        @click="this.setMarker"
                        style="width: 100%; height: 500px"
                    >
                        <GmapMarker
                            v-model="marker"
                            :position="this.mapCenter"
                        />
                    </GmapMap>
                    <div class="grid grid-cols-2 gap-1 max-w-lg mt-2 mx-auto">
                        <div>
                            <label
                                for="latitude"
                                class="block text-sm font-medium leading-5 text-gray-700"
                                >Latitude</label
                            >
                            <input
                                v-model.number.lazy="reportedMapCenter.lat"
                                id="latitude"
                                step="0.00001"
                                class="form-input mt-2 w-full sm:text-sm sm:leading-5"
                                name="latitude"
                                @change="this.syncMap"
                            />
                        </div>
                        <div>
                            <label
                                for="longitude"
                                class="block text-sm font-medium leading-5 text-gray-700"
                                >Latitude</label
                            >
                            <input
                                v-model.number.lazy="reportedMapCenter.lng"
                                id="longitude"
                                step="0.00001"
                                class="form-input mt-2 w-full sm:text-sm sm:leading-5"
                                name="longitude"
                                @change="this.syncMap"
                            />
                        </div>
                    </div>

                    <div class="mt-6 flex justify-between mx-auto max-w-lg">
                        <span class="block w-2/5 rounded-md shadow-sm">
                            <button
                                :disabled="invalid"
                                :class="
                                    invalid
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-animali-700 hover:bg-primary active:bg-secondary'
                                "
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                @click.prevent="prevStep(3)"
                            >
                                Prev
                            </button>
                        </span>
                        <span class="block w-2/5 rounded-md shadow-sm">
                            <button
                                :disabled="invalid"
                                :class="
                                    invalid
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-animali-700 hover:bg-primary active:bg-secondary'
                                "
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                @click.prevent="nextStep(3)"
                            >
                                Next
                            </button>
                        </span>
                    </div>
                </div>

                <div v-else-if="currentStep === 4">
                    <div
                        class="mt-6 max-w-5xl grid grid-cols-1 sm:grid-cols-2 sm:gap-4 mx-auto"
                    >
                        <div>
                            <h3
                                class="text-center text-lg leading-6 font-medium text-gray-900"
                            >
                                Your Encounter
                            </h3>
                            <img
                                v-if="photo !== null"
                                :src="photo"
                                alt="upload photo"
                                class="flex justify-center mt-6 max-h-80 w-full h-full object-cover rounded-md"
                            />
                            <p class="mt-4 text-center text-sm text-gray-500">
                                Can't find a match? Click 'New Animal' to submit
                                a new animal
                            </p>
                        </div>
                        <div v-if="newAnimal === false">
                            <h3
                                class="text-center text-lg leading-6 font-medium text-gray-900"
                            >
                                Comparison
                            </h3>

                            <AutoSuggest
                                ref="navbarSearch"
                                :autoFocus="showFullSearch"
                                :data="searchData"
                                search_key="name"
                                background-overlay
                                class="w-full mt-6"
                                inputClasses="block w-full h-full px-3 py-4 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                                placeholder="🔎 Search for specific animal..."
                                @input="hnd_search_query_update"
                                @selected="selected"
                                @closeSearchbar="showFullSearch = false"
                            >
                                <template v-slot:Animals="{ suggestion }">
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <div class="flex items-center">
                                            <img
                                                :src="suggestion.profile_pic"
                                                :alt="suggestion.name"
                                                class="w-8 h-8 mr-3 rounded-full"
                                            />
                                            <div class="leading-none mt-1">
                                                <p>{{ suggestion.name }}</p>
                                                <small>{{
                                                    suggestion.id
                                                }}</small>
                                            </div>
                                        </div>
                                        <small>{{ suggestion.status }}</small>
                                    </div>
                                </template>

                                <template v-slot:noResult="{ group_name }">
                                    <div class="flex items-center">
                                        <span>No results found.</span>
                                    </div>
                                </template>
                            </AutoSuggest>
                            <div class="relative">
                                <img
                                    v-if="comparisonAnimal !== null"
                                    :src="comparisonAnimal.profile_pic"
                                    alt="upload photo"
                                    class="flex justify-center max-h-80 w-full object-cover"
                                />
                                <div
                                    class="absolute bottom-0 flex items-center justify-center text-white text-center text-2xl h-12 font-medium w-full bg-black bg-opacity-50"
                                >
                                    {{ comparisonAnimal.name }} -
                                    {{ comparisonAnimal.id }}
                                </div>
                                <div
                                    class="cursor-pointer absolute left-4 top-36 bg-black bg-opacity-75 rounded-full h-12 w-12"
                                    @click="prevAnimal()"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="white"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div
                                    class="cursor-pointer absolute right-4 top-36 bg-black bg-opacity-75 rounded-full h-12 w-12"
                                    @click="nextAnimal()"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="white"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-6 flex-col sm:flex sm:flex-row sm:justify-between mx-auto max-w-5xl"
                    >
                        <span class="block w-full py-4 sm:w-1/5">
                            <button
                                :disabled="invalid"
                                :class="
                                    invalid
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-animali-700 hover:bg-primary active:bg-secondary'
                                "
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                @click.prevent="prevStep(4)"
                            >
                                Prev
                            </button>
                        </span>
                        <span class="block w-full py-4 sm:w-1/5">
                            <button
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium bg-animali-600 hover:bg-primary active:bg-secondary rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                @click.prevent="nextStep(4)"
                                @click="newAnimal = true"
                            >
                                New Animal
                            </button>
                        </span>
                        <span class="block w-full py-4 sm:w-1/5">
                            <button
                                :disabled="invalid"
                                :class="
                                    invalid
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-animali-700 hover:bg-primary active:bg-secondary'
                                "
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                @click.prevent="nextStep(4)"
                                @click="newAnimal = false"
                            >
                                Match with {{ comparisonAnimal.id }}
                            </button>
                        </span>
                    </div>
                </div>

                <div v-else-if="currentStep === 5">
                    <form class="max-w-xl mx-auto mt-6">
                        <div>
                            <div>
                                <div>
                                    <h3
                                        class="text-lg leading-6 font-medium text-gray-900"
                                    >
                                        Review
                                    </h3>
                                    <p
                                        class="mt-1 text-sm leading-5 text-gray-500"
                                    >
                                        Review encounter information before
                                        uploading to the database.
                                    </p>
                                </div>
                                <div
                                    class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6"
                                >
                                    <div class="sm:col-span-4">
                                        <label
                                            for="species"
                                            class="block text-sm font-medium leading-5 text-gray-700"
                                        >
                                            Species
                                        </label>
                                        <p class="mt-2 text-sm text-gray-500">
                                            {{ primarySpecies }}
                                        </p>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label
                                            for="photo"
                                            class="block text-sm leading-5 font-medium text-gray-700"
                                        >
                                            Photo
                                        </label>
                                        <div v-if="photo !== null">
                                            <img
                                                :src="photo"
                                                alt="upload photo"
                                                class="mt-2 max-h-60 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label
                                            for="date"
                                            class="block text-sm font-medium leading-5 text-gray-700"
                                        >
                                            Date
                                        </label>
                                        <p class="mt-2 text-sm text-gray-500">
                                            {{
                                                this.$moment(date).format('lll')
                                            }}
                                        </p>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label
                                            for="map"
                                            class="block text-sm font-medium leading-5 text-gray-700"
                                        >
                                            Location
                                        </label>
                                        <p class="mt-2 text-sm text-gray-500">
                                            {{ reportedMapCenter.lat }},
                                            {{ reportedMapCenter.lng }}
                                        </p>
                                        <GmapMap
                                            class="mt-4 max-w-lg max-h-80"
                                            :center="this.reportedMapCenter"
                                            :zoom="5"
                                            :options="this.mapOptions"
                                            map-type-id="terrain"
                                            style="width: 100%; height: 500px"
                                        >
                                            <GmapMarker
                                                v-model="marker"
                                                :position="
                                                    this.reportedMapCenter
                                                "
                                            />
                                        </GmapMap>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8 border-t border-gray-200 pt-8">
                                <div>
                                    <h3
                                        class="text-lg leading-6 font-medium text-gray-900"
                                    >
                                        Animal Information
                                    </h3>
                                    <p
                                        class="mt-1 text-sm leading-5 text-gray-500"
                                    >
                                        This is the animal you are submitting an
                                        encounter for.
                                    </p>
                                </div>

                                <div v-if="newAnimal === false" class="mt-6">
                                    <div>
                                        <label
                                            for="name"
                                            class="block text-sm font-medium leading-5 text-gray-700"
                                        >
                                            Name
                                        </label>
                                        {{ comparisonAnimal.name }}
                                    </div>

                                    <div class="mt-4">
                                        <label
                                            for="id"
                                            class="block text-sm font-medium leading-5 text-gray-700"
                                        >
                                            Identification
                                        </label>
                                        {{ comparisonAnimal.id }}
                                    </div>
                                </div>
                                <div v-else class="mt-6">
                                    <label
                                        for="newName"
                                        class="block text-sm font-medium leading-5 text-gray-700"
                                    >
                                        Enter New Animal Name
                                    </label>
                                    <div
                                        class="mt-1 relative rounded-md shadow-sm"
                                    >
                                        <input
                                            v-model="animalName"
                                            id="newName"
                                            class="form-input block w-full sm:text-sm sm:leading-5"
                                            placeholder=""
                                        />
                                    </div>

                                    <label
                                        for="sex"
                                        class="block mt-4 text-sm font-medium leading-5 text-gray-700"
                                    >
                                        Sex
                                    </label>
                                    <select
                                        v-model="sex"
                                        id="gender"
                                        class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                    >
                                        <option value="male" selected
                                            >Male</option
                                        >
                                        <option value="female">Female</option>
                                    </select>

                                    <div
                                        class="grid grid-cols-1 sm:grid-cols-2 sm:gap-4"
                                    >
                                        <div class="mt-4">
                                            <label
                                                for="length"
                                                class="block text-sm font-medium leading-5 text-gray-700"
                                                >Est. Length/Height</label
                                            >
                                            <div
                                                class="mt-1 relative rounded-md shadow-sm"
                                            >
                                                <input
                                                    v-model="length"
                                                    type="number"
                                                    id="length"
                                                    class="form-input block w-full pl-7 pr-10 text-right sm:text-sm sm:leading-5"
                                                    placeholder="230"
                                                />
                                                <div
                                                    class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                                                >
                                                    <span
                                                        class="text-gray-500 sm:text-sm sm:leading-5"
                                                    >
                                                        CM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <label
                                                for="weight"
                                                class="block text-sm font-medium leading-5 text-gray-700"
                                                >Est. Weight</label
                                            >
                                            <div
                                                class="mt-1 relative rounded-md shadow-sm"
                                            >
                                                <input
                                                    v-model="weight"
                                                    type="number"
                                                    id="weight"
                                                    class="form-input block w-full pl-7 pr-10 text-right sm:text-sm sm:leading-5"
                                                    placeholder="14"
                                                />
                                                <div
                                                    class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                                                >
                                                    <span
                                                        class="text-gray-500 sm:text-sm sm:leading-5"
                                                    >
                                                        KG
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <label
                                        for="injury"
                                        class="block text-sm leading-5 font-medium text-gray-700"
                                        >Injury?</label
                                    >
                                    <select
                                        v-model="injury"
                                        id="injury"
                                        class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                    >
                                        <option value="false" selected
                                            >No</option
                                        >
                                        <option value="true">Yes</option>
                                    </select>
                                </div>

                                <div class="mt-4">
                                    <label
                                        for="notes"
                                        class="block text-sm font-medium leading-5 text-gray-700"
                                    >
                                        Other Notes
                                    </label>
                                    <div class="mt-1 rounded-md shadow-sm">
                                        <textarea
                                            v-model="notes"
                                            id="notes"
                                            rows="3"
                                            class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                            placeholder="Any other important notes about the encounter..."
                                        ></textarea>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-500"></p>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="mt-6 flex justify-between mx-auto max-w-xl">
                        <span class="block w-2/5 rounded-md shadow-sm">
                            <button
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-animali-700 hover:bg-primary active:bg-secondary text-white focus:outline-none transition duration-150 ease-in-out"
                                @click.prevent="prevStep(5)"
                            >
                                Prev
                            </button>
                        </span>
                        <span class="block w-2/5 rounded-md shadow-sm">
                            <button
                                :disabled="
                                    primarySpecies === null ||
                                        photo === null ||
                                        date === null ||
                                        isLoading === true
                                "
                                :class="
                                    primarySpecies === null ||
                                    photo === null ||
                                    date === null ||
                                    isLoading === true
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-animali-700 hover:bg-primary active:bg-secondary'
                                "
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out"
                                @click.prevent="submitEncounter()"
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
                                    ></path>
                                </svg>
                                Submit
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mapStyle from '@/assets/map-styles'

export default {
    data() {
        return {
            isLoading: false,
            currentStep: 1,
            step1Complete: false,
            step2Complete: false,
            step3Complete: false,
            step4Complete: false,

            primarySpecies: null,
            photo: null,
            date: null,
            newAnimal: false,
            animalName: null,

            // Map
            mapOptions: {
                styles: mapStyle,
                streetViewControl: false,
                mapTypeControl: false,
                gestureHandling: 'cooperative'
            },
            mapCenter: null,
            reportedMapCenter: {
                lat: 24.132,
                lng: 9.445
            },
            marker: {
                position: {
                    lat: 11,
                    lng: 43
                }
            },

            showFullSearch: false,
            comparisonAnimal: this.$store.state.animals[0],
            injury: false,
            notes: null,
            sex: 'male',
            length: null,
            weight: null
        }
    },

    computed: {
        searchData() {
            const data = {
                Animals: {
                    key: 'name',
                    data: this.$store.state.animals
                }
            }
            return data
        },

        animalsToCompare() {}
    },

    created() {
        this.syncMap()
    },

    methods: {
        // MAP FUNCTIONS
        updateCenter(latLng) {
            this.reportedMapCenter = {
                lat: latLng.lat(),
                lng: latLng.lng()
            }
        },

        syncMap() {
            this.mapCenter = this.reportedMapCenter
        },

        setMarker(e) {
            this.mapCenter = {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            }
            this.reportedMapCenter = this.mapCenter
        },

        // PHOTO
        selectPhoto() {
            this.$refs.photoInput.click()
        },

        detectPhotoFile(e) {
            const file = e.target.files[0]
            const self = this
            if (file) {
                const reader = new FileReader()
                reader.addEventListener('load', function() {
                    console.log(this)
                    self.photo = this.result
                })

                reader.readAsDataURL(file)
            } else {
                self.photo = null
            }
        },

        // NAVIGATION
        prevStep(fromStep) {
            this.currentStep -= 1

            if (fromStep === 5) {
                this.step4Complete = false
                this.newAnimal = false
            } else if (fromStep === 4) {
                this.step3Complete = false
            } else if (fromStep === 3) {
                this.step2Complete = false
            } else if (fromStep === 2) {
                this.step3Complete = false
            }
        },

        nextStep(fromStep) {
            this.currentStep += 1

            if (fromStep === 1) {
                this.step1Complete = true
            } else if (fromStep === 2) {
                this.step2Complete = true
            } else if (fromStep === 3) {
                this.step3Complete = true
            } else if (fromStep === 4) {
                this.step4Complete = true
            }
        },

        selected(item) {
            if (item.Animals) {
                this.comparisonAnimal = item.Animals
            }
            this.showFullSearch = false
        },

        prevAnimal() {
            const currentAnimalIndex = this.$store.state.animals.findIndex(
                animal => animal.id === this.comparisonAnimal.id
            )

            if (currentAnimalIndex > 0) {
                this.comparisonAnimal = this.$store.state.animals[
                    currentAnimalIndex - 1
                ]
            }
        },

        nextAnimal() {
            const currentAnimalIndex = this.$store.state.animals.findIndex(
                animal => animal.id === this.comparisonAnimal.id
            )

            if (currentAnimalIndex < this.$store.state.animals.length - 1) {
                this.comparisonAnimal = this.$store.state.animals[
                    currentAnimalIndex + 1
                ]
            }
        },

        submitEncounter() {
            this.isLoading = true

            const data = {
                primarySpecies: this.primarySpecies,
                photo: this.photo,
                date: this.date,
                newAnimal: this.newAnimal,
                animalName: this.animalName,
                coordinates: this.reportedMapCenter,
                animal: this.comparisonAnimal,
                injury: this.injury === 'false' ? false : true,
                notes: this.notes,
                sex: this.sex,
                length: this.length,
                weight: this.weight
            }

            this.$store.dispatch('submitEncounter', data).catch(err => {
                this.isLoading = false
                console.log(err)
            })
        }
    }
}
</script>
