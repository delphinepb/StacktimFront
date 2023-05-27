    Application Angular de gestion des connaissances
Bienvenue dans l'application Angular de gestion des connaissances ! Cette application vous permet de gérer vos connaissances et ressources grâce à une interface conviviale. Vous pouvez accéder à l'application via votre navigateur à l'URL suivante :

Page de login (non fonctionnelle) : http://localhost:4200/login
Page principale (liste des connaissances) : http://localhost:4200/
Page de liste des ressources : http://localhost:4200/listeRess

    Installation
Pour exécuter cette application localement, suivez les étapes ci-dessous :

-Assurez-vous d'avoir installé Node.js sur votre machine.
-Clonez ce dépôt GitHub sur votre machine locale.
-Accédez au répertoire du projet dans votre terminal ou votre invite de commandes.
-Exécutez la commande suivante pour installer les dépendances :
      npm install
Ensuite, exécutez la commande suivante pour démarrer l'application :
      npm start
L'application sera maintenant accessible à l'adresse http://localhost:4200.

    Fonctionnalités
L'application Angular de gestion des connaissances propose les fonctionnalités suivantes :

Page de login
La page de login vous permet de vous connecter à l'application. Veuillez noter que cette fonctionnalité n'est pas encore implémentée dans la version actuelle de l'application. Vous pouvez utiliser un mécanisme d'authentification personnalisé ou intégrer une solution d'authentification tierce selon vos besoins.

Page principale (liste des connaissances)
Sur la page principale, vous pouvez afficher la liste des connaissances. Les fonctionnalités disponibles sont les suivantes :

Ajouter une connaissance : Cliquez sur le pictogramme "+" pour ouvrir un composant de type dialog qui vous permet de soumettre un formulaire pour ajouter une nouvelle connaissance.
Supprimer une connaissance : Utilisez le tableau répertoriant les connaissances pour supprimer une connaissance spécifique.
Page de liste des ressources
Sur la page de liste des ressources, vous pouvez afficher la liste des ressources. Les fonctionnalités disponibles sont les suivantes :

Ajouter une ressource : Cliquez sur le pictogramme "+" pour ouvrir un composant de type dialog qui vous permet de soumettre un formulaire pour ajouter une nouvelle ressource.
Supprimer une ressource : Utilisez le tableau répertoriant les ressources pour supprimer une ressource spécifique.
Structure du projet
La structure du projet Angular suit une convention classique :

src/ : Ce répertoire contient le code source de l'application.
app/ : Ce répertoire contient les composants, services et autres éléments Angular de l'application.
components/ : Ce répertoire contient les composants réutilisables utilisés dans l'application.
pages/ : Ce répertoire contient les différentes pages de l'application, notamment la page de login, la page principale et la page
