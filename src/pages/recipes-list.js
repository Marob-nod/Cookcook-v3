import Layout from '../components/layout';
import dataRecipes from '../assets/data/recipes'
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import KeyFeature from '../sections/key-feature';

export default function RecipesList() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <KeyFeature slogan="Find your favorite recipe" title="All the recipes" recipes={dataRecipes} />
            </Layout>
        </ThemeProvider>
    );
}