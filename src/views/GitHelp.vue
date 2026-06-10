<script>

export default {
  name: "GitHelp",
}
</script>

<template>
  <header>
    <h1>Dev-ToolKit</h1>
    <p>Mémo Git</p>
    <nav aria-label="Raccourcis de page" class="gitMenu">
      <a class="onglet" href="#solo">Travail solo</a>
      <a class="onglet" href="#cowork">Travail collaboratif</a>
      <a class="onglet" href="#emergency">Cas d'urgence</a>
    </nav>
  </header>
  <main>
    <div class="coloredBlock">
      <p>Retrouvez les commandes Git essentielles</p>
    </div>
    <section>
      <h2 id="solo">Travail solo</h2>
      <h3>1. Configuration initiale</h3>
      <p>Cette partie englobe les commandes à usage unique permettant de programmer Git sur votre environnement de travail.</p>
      <table>
        <thead>
          <tr>
            <th>Effet</th>
            <th>Commande</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Définir votre nom</td>
            <td><code>git config --global user.name "votre nom"</code></td>
          </tr>
          <tr>
            <td>Définir votre email</td>
            <td><code>git config --global user.email "votre@email.com"</code></td>
          </tr>
          <tr>
            <td>Vérifier votre configuration</td>
            <td><code>git config --list</code></td>
          </tr>
          <tr>
            <td>Créer un dépôt Git dans un dossier existant</td>
            <td><code> git init</code></td>
          </tr>
          <tr>
            <td>Récupérer un projet existant depuis GitHub</td>
            <td><code>git clone "URL"</code></td>
          </tr>
        </tbody>
      </table>
      <h3>2. Workflow quotidien</h3>
      <p>Commandes les plus utilisées pour sauvegarder et envoyer votre travail sur GitHub</p>
      <table>
        <thead>
          <tr>
            <th>Effet</th>
            <th>Commande</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Voir l'état de vos fichiers modifiés</td>
            <td><code>git status</code></td>
          </tr>
          <tr>
            <td>Préparer tous les fichiers modifiés pour un commit</td>
            <td><code>git add .</code></td>
          </tr>
          <tr>
            <td>Préparer un seul fichier pour un commit</td>
            <td><code>git add "fichier"</code></td>
          </tr>
          <tr>
            <td>Enregistrer les modifications avec un message</td>
            <td><code>git commit -m "message"</code></td>
          </tr>
          <tr>
            <td>Récupérer les dernières modifications du serveur</td>
            <td><code>git pull</code></td>
          </tr>
          <tr>
            <td>Envoyer vos commits sur GitHub</td>
            <td><code>git push</code></td>
          </tr>
          <tr>
            <td>Voir l'historique des commits en résumé</td>
            <td><code>git log --oneline</code></td>
          </tr>
        </tbody>
      </table>
      <h3>3. Branches</h3>
      <p>Travailler sur une fonctionnalité dans un espace isolé, sans toucher au code principal.</p>
      <table>
        <thead>
          <tr>
            <th>Effet</th>
            <th>Commande</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Créer une nouvelle branche</td>
            <td><code>git branch "nom"</code></td>
          </tr>
          <tr>
            <td>Créer une branche et basculer dessus directement</td>
            <td><code>git checkout -b "nom"</code></td>
          </tr>
          <tr>
            <td>Changer de branche</td>
            <td><code>git switch "nom"</code><br>ou <code>git checkout "nom"</code><br>(ancienne version)</td>
          </tr>
          <tr>
            <td>Voir toutes les branches</td>
            <td><code>git branch</code></td>
          </tr>
          <tr>
            <td>Fusionner une branche dans la branche courante</td>
            <td><code>git switch "branche courante"</code><br><code>git merge "branche"</code></td>
          </tr>
          <tr>
            <td>Supprimer une branche (après fusion)</td>
            <td><code>git branch -d "nom"</code></td>
          </tr>
        </tbody>
      </table>
      <h3>4. Corrections courantes</h3>
      <p>Réparer une erreur sans paniquer - les bouées de sauvetage du quotidien</p>
      <table>
        <thead>
          <tr>
            <th>Effet</th>
            <th>Commande</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Annuler le dernier commit en gardant les fichiers modifiés</td>
            <td><code>git reset --soft HEAD~1</code></td>
          </tr>
          <tr>
            <td>Annuler les modifications d'un fichier non encore commité</td>
            <td><code>git restore "fichier"</code></td>
          </tr>
          <tr>
            <td>Corriger le message ou le contenu du dernier commit</td>
            <td><code>git commit --amend</code></td>
          </tr>
          <tr>
            <td>Mettre de côté les modifications en cours sans les commiter</td>
            <td><code>git stash</code></td>
          </tr>
          <tr>
            <td>Récupérer les modifications mises de côté</td>
            <td><code>git stash pop</code></td>
          </tr>
        </tbody>
      </table>
    </section>
    <hr>
    <section>
      <h2 id="cowork">Travail collaboratif</h2>
      <p>Pour travailler à plusieurs sans écraser le travail des autres</p>
      <table>
        <thead>
          <tr>
            <th>Effet</th>
            <th>Commande</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Récupérer les changements distants sans les fusionner</td>
            <td><code>git fetch</code></td>
          </tr>
          <tr>
            <td>Récupérer ET fusionner les changements distants</td>
            <td><code>git pull</code></td>
          </tr>
          <tr>
            <td>Réappliquer ses commits sur la dernière version distante (historique propre)</td>
            <td><code>git rebase origin/main</code></td>
          </tr>
          <tr>
            <td>Récupérer un seul commit précis depuis une autre branche</td>
            <td><code>git cherry-pick "hash"</code></td>
          </tr>
        </tbody>
      </table>
    </section>
    <hr>
    <section>
      <h2 id="emergency">Cas d'urgence</h2>
      <h3>1. Supprimer une donnée sensible sur GitHub</h3>
      <p>Avant tout, il faut désactiver définitivement le mot de passe ou les données d'un fichier .env envoyé par erreur.</p>
      <table>
        <thead>
          <tr>
            <th>Effet</th>
            <th>Commande</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Installer l'outil de réécriture d'historique</td>
            <td><code>pip install git-filter-repo</code></td>
          </tr>
          <tr>
            <td>Supprimer complètement un fichier de tout l'historique</td>
            <td><code>git filter-repo --path "nomFichier" --invert-paths</code></td>
          </tr>
          <tr>
            <td>Supprimer une valeur précise (ex: un mot de passe) de tout l'historique des fichiers pushés</td>
            <td>
              <code>echo "monPassword==>REMOVED" > replacements.txt</code><br>
              <code>git filter-repo --replace-text replacements.txt</code>
            </td>
          </tr>
          <tr>
            <td>Forcer l'envoi de l'historique réécrit sur GitHub</td>
            <td><code>git push origin --force --all</code></td>
          </tr>
          <tr>
            <td>Ajouter le fichier au .gitignore pour éviter que ça se reproduise</td>
            <td><code>echo ".env" >> .gitignore</code></td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
code{
  font-family: var(--font-family-code),monospace;
}
table{
  border-spacing: 0;
  margin: 0 auto 20px;
}
hr {
  border: none;
  border-top: 2px double var(--bg-color-logo);
  margin: 30px 0;
}
td, th{
  border-bottom: 1px solid var(--bg-color-logo);
  margin: 0;
  padding : 5px;
}
main{
  overflow-y: auto;
}
section{
  padding: 1rem 5% 1rem;
}
.gitMenu{
  display: flex;
  border : 1px solid var(--border-color);
  margin-top:10px;
  background: var(--bg-color-general);
}
.onglet{
  flex:1;
  text-align: center;
  margin : 10px 0 0 0;
  padding-bottom : 10px;
  cursor:pointer;
}
a {
  color: var(--font-color-black);
  text-decoration: none;
}
.onglet:hover {
  color: var(--bg-color-logo);
  font-weight: var(--font-weight-title);
  border-bottom: var(--bg-color-logo) 2px solid;
  margin: 8px 0 0 0;
}


</style>