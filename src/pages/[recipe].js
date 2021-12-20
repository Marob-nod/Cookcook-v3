/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Layout from '../components/layout'
import RecipeBanner from '../sections/recipe-banner';
import RecipeSpecifications from '../sections/recipe-specifications';
import InstructionsSection from '../sections/Instructions-section';
import dataRecipes from '../assets/data/recipes'
import { useEffect, useState } from 'react';
import React from 'react';

export default function Recipe() {

    const [currentRecipe, setCurrentRecipe] = useState({})
    const [recipeIsLoaded, setRecipeIsLoaded] = useState(false)

    useEffect(() => {
        console.log('Debut du useffect')
        const recipe = dataRecipes.find((item) => (
            item.slug === window.location.pathname
        ))
        setCurrentRecipe(recipe)
        setRecipeIsLoaded(true)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            {recipeIsLoaded && <Layout>
                <RecipeBanner name={currentRecipe.name} description={currentRecipe.description} />
                <RecipeSpecifications prepTime={currentRecipe.prepTime} cookTime={currentRecipe.cookTime} serves={currentRecipe.serves} level={currentRecipe.level} />
                <InstructionsSection ingredients={currentRecipe.ingredients} instructions={currentRecipe.instructions} />
            </Layout>}
        </ThemeProvider>
    );
}


