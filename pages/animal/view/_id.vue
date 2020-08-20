<template>
    <main class="flex-1 relative z-0 overflow-y-auto">
        <!-- Page header -->
        <div class="bg-white shadow">
            <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div
                    class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-cool-gray-200"
                >
                    <div v-if="animal_data" class="flex-1 min-w-0">
                        <!-- Profile -->
                        <div class="flex items-center">
                            <img
                                class="hidden h-15 w-15 rounded-full sm:block"
                                :src="animal_data.profile_pic"
                                alt
                            />
                            <div>
                                <div class="flex items-center">
                                    <img
                                        class="h-15 w-15 rounded-full sm:hidden"
                                        :src="animal_data.profile_pic"
                                        alt
                                    />
                                    <h1
                                        class="ml-3 text-2xl font-bold leading-7 text-cool-gray-900 sm:leading-9 sm:truncate"
                                    >
                                        {{ animal_data.name }}
                                    </h1>
                                </div>
                                <dl
                                    class="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap"
                                >
                                    <dt class="sr-only">Company</dt>
                                    <dd
                                        class="flex items-center text-sm leading-5 text-cool-gray-500 font-medium capitalize sm:mr-6"
                                    >
                                        {{ animal_data.id }}
                                    </dd>
                                    <dt class="sr-only">Account status</dt>
                                    <dd
                                        class="mt-3 flex items-center text-sm leading-5 text-cool-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize"
                                    >
                                        <div
                                            class="flex items-center"
                                            v-if="
                                                animal_data.status === 'active'
                                            "
                                        >
                                            <span
                                                class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-teal-100 text-teal-800"
                                                >active</span
                                            >
                                        </div>
                                        <div
                                            v-else-if="
                                                animal_data.status ===
                                                    'deceased'
                                            "
                                            class="flex items-center"
                                        >
                                            <span
                                                class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-pink-100 text-pink-800"
                                                >deceased</span
                                            >
                                        </div>
                                        <div v-else>
                                            <span
                                                class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-orange-100 text-orange-800"
                                                >inactive</span
                                            >
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                        <span class="shadow-sm rounded-md">
                            <nuxt-link
                                to="/add-encounter"
                                class="inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-cool-gray-800 active:bg-cool-gray-50 transition duration-150 ease-in-out"
                                >Add Encounter</nuxt-link
                            >
                        </span>
                        <span class="shadow-sm rounded-md">
                            <a
                                href="#track"
                                class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline-teal focus:border-teal-700 active:bg-teal-700 transition duration-150 ease-in-out"
                                >View Track</a
                            >
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-lg leading-6 font-medium text-cool-gray-900">
                    Overview
                </h2>
                <div
                    class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <!-- Card -->

                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="p-5">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <svg
                                        class="h-6 w-6 text-cool-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                        />
                                    </svg>
                                </div>
                                <div class="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt
                                            class="text-sm leading-5 font-medium text-cool-gray-500 truncate"
                                        >
                                            Account balance
                                        </dt>
                                        <dd>
                                            <div
                                                class="text-lg leading-7 font-medium text-cool-gray-900"
                                            >
                                                $30,659.45
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="bg-cool-gray-50 px-5 py-3">
                            <div class="text-sm leading-5">
                                <a
                                    href="#"
                                    class="font-medium text-teal-600 hover:text-teal-900 transition ease-in-out duration-150"
                                    >View all</a
                                >
                            </div>
                        </div>
                    </div>

                    <!-- More cards... -->
                </div>
            </div>

            <h2
                class="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-cool-gray-900 sm:px-6 lg:px-8"
            >
                Recent activity
            </h2>

            <!-- Activity list (smallest breakopoint only) -->
            <div class="shadow sm:hidden">
                <ul
                    class="mt-2 divide-y divide-cool-gray-200 overflow-hidden shadow sm:hidden"
                >
                    <li>
                        <a
                            href="#"
                            class="block px-4 py-4 bg-white hover:bg-cool-gray-50"
                        >
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 flex space-x-2 truncate">
                                    <svg
                                        class="flex-shrink-0 h-5 w-5 text-cool-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <div
                                        class="text-cool-gray-500 text-sm truncate"
                                    >
                                        <p class="truncate">
                                            Payment to Molly Sanders
                                        </p>
                                        <p>
                                            <span
                                                class="text-cool-gray-900 font-medium"
                                                >$20,000</span
                                            >
                                            USD
                                        </p>
                                        <p>July 11, 2020</p>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        class="flex-shrink-0 h-5 w-5 text-cool-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </li>

                    <!-- More items... -->
                </ul>
                <nav
                    class="bg-white px-4 py-3 flex items-center justify-between border-t border-cool-gray-200"
                >
                    <div class="flex-1 flex justify-between">
                        <a
                            href="#"
                            class="relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
                            >Previous</a
                        >
                        <a
                            href="#"
                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
                            >Next</a
                        >
                    </div>
                </nav>
            </div>

            <!-- Activity table (small breakopoint and up) -->
            <div class="hidden sm:block">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col mt-2">
                        <div
                            class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg"
                        >
                            <table
                                class="min-w-full divide-y divide-cool-gray-200"
                            >
                                <thead>
                                    <tr>
                                        <th
                                            class="px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                                        >
                                            Date Seen
                                        </th>
                                        <th
                                            class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                                        >
                                            Location
                                        </th>
                                        <th
                                            class="hidden px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider md:block"
                                        >
                                            Injury
                                        </th>
                                        <th
                                            class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider"
                                        >
                                            Verified
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="bg-white divide-y divide-cool-gray-200"
                                >
                                    <tr class="bg-white">
                                        <td
                                            class="max-w-0 w-full px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-900"
                                        >
                                            <div class="flex">
                                                <a
                                                    href="#"
                                                    class="group inline-flex space-x-2 truncate text-sm leading-5"
                                                >
                                                    <svg
                                                        class="flex-shrink-0 h-5 w-5 text-cool-gray-400 group-hover:text-cool-gray-500 transition ease-in-out duration-150"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                    <p
                                                        class="text-cool-gray-500 truncate group-hover:text-cool-gray-900 transition ease-in-out duration-150"
                                                    >
                                                        Payment to Molly Sanders
                                                    </p>
                                                </a>
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500"
                                        >
                                            <span
                                                class="text-cool-gray-900 font-medium"
                                                >$20,000</span
                                            >
                                            USD
                                        </td>
                                        <td
                                            class="hidden px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-500 md:block"
                                        >
                                            <span
                                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 capitalize"
                                                >success</span
                                            >
                                        </td>
                                        <td
                                            class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500"
                                        >
                                            July 11, 2020
                                        </td>
                                    </tr>

                                    <!-- More rows... -->
                                </tbody>
                            </table>
                            <!-- Pagination -->
                            <nav
                                class="bg-white px-4 py-3 flex items-center justify-between border-t border-cool-gray-200 sm:px-6"
                            >
                                <div class="hidden sm:block">
                                    <p
                                        class="text-sm leading-5 text-cool-gray-700"
                                    >
                                        Showing
                                        <span class="font-medium">1</span>
                                        to
                                        <span class="font-medium">10</span>
                                        of
                                        <span class="font-medium">20</span>
                                        results
                                    </p>
                                </div>
                                <div
                                    class="flex-1 flex justify-between sm:justify-end"
                                >
                                    <a
                                        href="#"
                                        class="relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
                                        >Previous</a
                                    >
                                    <a
                                        href="#"
                                        class="ml-3 relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
                                        >Next</a
                                    >
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Projects list (only on smallest breakpoint) -->
            <div class="mt-10 sm:hidden">
                <div class="px-4 sm:px-6">
                    <h2
                        class="text-gray-500 text-xs font-medium uppercase tracking-wide"
                    >
                        Recent Encounters
                    </h2>
                </div>
                <ul
                    class="mt-3 border-t border-gray-200 divide-y divide-gray-100"
                >
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                        >
                            <div class="flex items-center truncate space-x-3">
                                <div
                                    class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600"
                                ></div>
                                <p
                                    class="font-medium truncate text-sm leading-6"
                                >
                                    GraphQL API
                                    <span
                                        class="truncate font-normal text-gray-500"
                                        >in Engineering</span
                                    >
                                </p>
                            </div>
                            <svg
                                class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <!-- More project rows... -->
                </ul>
            </div>
            <!-- Projects table (small breakpoint and up) -->
            <div class="hidden mt-8 sm:block">
                <div
                    class="align-middle inline-block min-w-full border-b border-gray-200"
                >
                    <table class="min-w-full">
                        <thead>
                            <tr class="border-t border-gray-200">
                                <th
                                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <span class="lg:pl-2"
                                        >Recent Encounters</span
                                    >
                                </th>
                                <th
                                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Members
                                </th>
                                <th
                                    class="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Last updated
                                </th>
                                <th
                                    class="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                ></th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-100">
                            <tr>
                                <td
                                    class="px-6 py-3 max-w-0 w-full whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
                                >
                                    <div
                                        class="flex items-center space-x-3 lg:pl-2"
                                    >
                                        <div
                                            class="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600"
                                        ></div>
                                        <a
                                            href="#"
                                            class="truncate hover:text-gray-600"
                                        >
                                            <span>
                                                GraphQL API
                                                <span
                                                    class="text-gray-500 font-normal"
                                                    >in Engineering</span
                                                >
                                            </span>
                                        </a>
                                    </div>
                                </td>
                                <td
                                    class="px-6 py-3 text-sm leading-5 text-gray-500 font-medium"
                                >
                                    <div class="flex items-center space-x-2">
                                        <div
                                            class="flex flex-shrink-0 -space-x-1"
                                        >
                                            <img
                                                class="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt
                                            />

                                            <img
                                                class="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt
                                            />

                                            <img
                                                class="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt
                                            />

                                            <img
                                                class="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt
                                            />
                                        </div>

                                        <span
                                            class="flex-shrink-0 text-xs leading-5 font-medium"
                                            >+8</span
                                        >
                                    </div>
                                </td>
                                <td
                                    class="hidden md:table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right"
                                >
                                    March 17, 2020
                                </td>
                                <td class="pr-6">
                                    <div
                                        class="relative flex justify-end items-center"
                                    >
                                        <button
                                            id="project-options-menu-0"
                                            aria-has-popup="true"
                                            type="button"
                                            class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150"
                                        >
                                            <svg
                                                class="w-5 h-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                                />
                                            </svg>
                                        </button>
                                        <!--
                      Dropdown panel, show/hide based on dropdown state.

                      Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                      Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                                        <div
                                            class="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg"
                                        >
                                            <div
                                                class="z-10 rounded-md bg-white shadow-xs"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="project-options-menu-0"
                                            >
                                                <div class="py-1">
                                                    <a
                                                        href="#"
                                                        class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                        role="menuitem"
                                                    >
                                                        <svg
                                                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                                            />
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                        Edit
                                                    </a>
                                                    <a
                                                        href="#"
                                                        class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                        role="menuitem"
                                                    >
                                                        <svg
                                                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                                                            />
                                                            <path
                                                                d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
                                                            />
                                                        </svg>
                                                        Duplicate
                                                    </a>
                                                    <a
                                                        href="#"
                                                        class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                        role="menuitem"
                                                    >
                                                        <svg
                                                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                                                            />
                                                        </svg>
                                                        Share
                                                    </a>
                                                </div>
                                                <div
                                                    class="border-t border-gray-100"
                                                ></div>
                                                <div class="py-1">
                                                    <a
                                                        href="#"
                                                        class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                        role="menuitem"
                                                    >
                                                        <svg
                                                            class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <!-- More project rows... -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- map header -->
            <div
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
            >
                <span class="lg:pl-2">Track</span>
            </div>
            <!-- Map view -->
            <div class="relative w-full" id="track">
                <EncounterSidebar
                    :isSidebarActive="encounterSidebar"
                    @closeSidebar="toggleEncounterSidebar"
                    :data="sidebarData"
                />
                <GmapMap
                    :center="center"
                    :zoom="6"
                    :options="mapOptions"
                    style="width: 100%; height: calc(100vh - 62px)"
                >
                    <gmap-polyline
                        v-if="path.length > 0"
                        :path="path"
                        :editable="false"
                        :options="polylineOptions"
                        ref="polyline"
                    ></gmap-polyline>
                    <GmapMarker
                        v-for="(encounter, index) in encounterData"
                        :key="index"
                        :position="latLng(encounter)"
                        :clickable="true"
                        @click="expandSidebar(encounter)"
                    ></GmapMarker>
                </GmapMap>
            </div>
        </div>
    </main>
</template>

<script>
import EncounterSidebar from '@/components/EncounterSidebar'

import mapStyle from '@/assets/map-styles'

export default {
    components: {
        EncounterSidebar
    },

    data() {
        return {
            // map
            mapOptions: {
                styles: mapStyle,
                streetViewControl: false,
                mapTypeControl: false,
                gestureHandling: 'cooperative',
                fullscreenControlOptions: {
                    position: 6
                },
                zoomControlOptions: {
                    position: 6
                }
            },
            polylineOptions: {
                strokeColor: '#ffffff',
                strokeWeight: 4,
                geodesic: true
            },
            center: { lat: 47.376332, lng: 8.547511 },

            // encounterData: null,
            path: [],
            animal_not_found: false,

            encounterSidebar: false,
            sidebarData: {}
        }
    },

    watch: {
        //   $route(to, from) {
        //     // react to route changes...
        //     // show loading
        //     this.fetch_encounterData(this.$route.params.id);
        //   },

        encounterData() {
            const encounters = this.encounterData
            const length = encounters.length
            let totalLat = 0
            let totalLng = 0
            encounters.map(encounter => {
                totalLat += encounter.location.latitude
                totalLng += encounter.location.longitude
                this.path.push({
                    lat: encounter.location.latitude,
                    lng: encounter.location.longitude
                })
            })
            const newLat = totalLat / length
            const newLng = totalLng / length
            const newCenter = { lat: newLat, lng: newLng }

            this.center = newCenter
        }
    },

    computed: {
        animal_data() {
            return this.$store.state.animals.find(animal => {
                return animal.id === this.$route.params.id
            })
        },

        encounterData() {
            return this.$store.state.encounters.filter(encounter => {
                return encounter.animalId === this.$route.params.id
            })
        }
    },

    methods: {
        latLng(encounter) {
            const position = {}
            const lat = encounter.location.latitude
            const lng = encounter.location.longitude
            position.lat = lat
            position.lng = lng
            return position
        },

        toggleEncounterSidebar() {
            this.encounterSidebar = !this.encounterSidebar
        },

        expandSidebar(encounter) {
            const center = {
                lat: encounter.location.latitude,
                lng: encounter.location.longitude
            }
            this.center = center
            this.sidebarData = encounter
            this.encounterSidebar = true
        },

        reCenter() {
            const encounters = this.encounterData
            const length = encounters.length
            let totalLat = 0
            let totalLng = 0
            encounters.map(encounter => {
                totalLat += encounter.location.latitude
                totalLng += encounter.location.longitude
                this.path.push({
                    lat: encounter.location.latitude,
                    lng: encounter.location.longitude
                })
            })
            const newLat = totalLat / length
            const newLng = totalLng / length
            const newCenter = { lat: newLat, lng: newLng }

            this.center = newCenter
        }

        // fetch_encounterData(animalId) {
        //   const animalRef = this.$fireStore.collection("animals").doc(animalId);
        //   animalRef
        //     .collection("encounters")
        //     .get()
        //     .then((querySnapshot) => {
        //       const documents = [];
        //       querySnapshot.forEach((doc) => {
        //         const encounter = doc.data();
        //         encounter.id = doc.id;
        //         documents.push(encounter);
        //       });
        //       this.encounterData = documents;
        //       // close loading
        //     })
        //     .catch(function (error) {
        //       console.log("Error getting collection:", error);
        //     });
        // },
    },

    created() {
        // this.fetch_encounterData(this.$route.params.id);
    },

    mounted() {
        this.reCenter()
    }
}
</script>
