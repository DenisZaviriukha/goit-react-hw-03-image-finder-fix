import { Formik, Form, Field } from "./Searchbar.styled"
import { fetchData } from 'api';
export const Searchbar = ({ onSearch, addImages, searchValue, spinnerStarts, spinnerFinishes}) => {

    const initialValues = {
        searchbar: ''
    };

    return (
        <Formik className="Searchbar"
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
                try {
                    if (values.searchbar !== '' && values.searchbar !== searchValue) {
                        spinnerStarts()
                        const arrayOfImages = await fetchData(values.searchbar)
                        onSearch(values.searchbar)
                        addImages( arrayOfImages, searchValue)
                        actions.resetForm()
                        spinnerFinishes()
                    }
                }
                catch (error) {
                    console.error(error)
                }
            }}
        >
            <Form>
                <button className="SearchForm-button" type="submit">Search</button>
                <Field
                    name="searchbar"
                    type="text"
                    placeholder="Search images and photos"
                />
            </Form>
        </Formik>
    );
};