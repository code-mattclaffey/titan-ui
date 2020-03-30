module.export = {
    roots: ['<rootDir>/src'],
    transform: {
        '\\.(ts|tsx)?$': 'ts-jest',
        '\\.(js|jsx)?$': 'babel-jest',
    },
    testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx, ts, tsx}'], // finds test
    moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'tsx', 'ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '@testing-library/react/cleanup-after-each',
    ],
};
